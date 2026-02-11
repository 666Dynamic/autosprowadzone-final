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

    // Sanitize inputs to prevent XSS in email HTML
    const escapeHtml = (str: string) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Nie podano');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
    const safeMode = escapeHtml(mode || 'simple');

    try {
        // Send to Admin
        const result = await resend.emails.send({
            from: 'SprowadzoneAuto <kontakt@sprowadzoneauto.pl>', 
            to: ['kontakt@sprowadzoneauto.pl'],
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
      `
        });

        console.log('Email sent successfully:', result);

        // Optional: Send auto-reply to Client
        // await resend.emails.send({ ... })

        return { success: true };
    } catch (error) {
        console.error('Email sending failed:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        return { success: false, error: 'Błąd wysyłki. Spróbuj ponownie.' };
    }
}
