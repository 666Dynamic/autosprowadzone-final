"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Imię jest za krótkie")
    .max(100, "Imię jest za długie"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z
    .string()
    .regex(/^[+]?[\s0-9()+-]{7,20}$/, "Nieprawidłowy numer telefonu")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(5, "Wiadomość jest za krótka")
    .max(5000, "Wiadomość jest za długa"),
  mode: z.string().optional().default("simple"),
});

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not configured");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    mode: formData.get("mode"),
  };

  const validatedFields = ContactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    const firstError =
      validatedFields.error.errors[0]?.message ||
      "Nieprawidłowe dane w formularzu.";
    return { success: false, error: firstError };
  }

  const { name, email, phone, message, mode } = validatedFields.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return {
      success: false,
      error:
        "Konfiguracja serwera jest nieprawidłowa. Skontaktuj się telefonicznie.",
    };
  }

  // Sanitize inputs to prevent XSS in email HTML
  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Nie podano");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeMode = escapeHtml(mode);

  try {
    // Send to Admin
    await resend.emails.send({
      from: "SprowadzoneAuto <kontakt@sprowadzoneauto.pl>",
      to: ["kontakt@sprowadzoneauto.pl"],
      replyTo: email,
      subject: `Nowe zgłoszenie: ${safeMode} - ${safeName}`,
      html: `
        <h2>Nowe zgłoszenie z formularza (${safeMode})</h2>
        <p><strong>Imię i nazwisko:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>
        <hr />
        <h3>Wiadomość:</h3>
        <p>${safeMessage}</p>
      `,
    });

    // Optional: Send auto-reply to Client
    // await resend.emails.send({ ... })

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return { success: false, error: "Błąd wysyłki. Spróbuj ponownie." };
  }
}
