"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const mode = formData.get('mode') as string;

    if (!name || !email || !message) {
        return { success: false, error: 'Wypełnij wymagane pola.' };
    }

    try {
        // Note for User: You need to verify a domain on Resend or use 'onboarding@resend.dev' for testing
        // Send to Admin
        await resend.emails.send({
            from: 'Autosprowadzone Form <onboarding@resend.dev>',
            to: ['autosprowadzone@gmail.com'], // TODO: Replace with user's real email
            replyTo: email,
            subject: `Nowe zgłoszenie: ${mode} - ${name}`,
            html: `
        <h2>Nowe zgłoszenie z formularza (${mode})</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
        <hr />
        <h3>Wiadomość:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        });

        // Optional: Send auto-reply to Client
        // await resend.emails.send({ ... })

        return { success: true };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error: 'Błąd wysyłki. Spróbuj ponownie.' };
    }
}
