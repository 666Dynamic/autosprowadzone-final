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
        // Send to Admin
        const result = await resend.emails.send({
            from: 'SprowadzoneAuto <kontakt@sprowadzoneauto.pl>', 
            to: ['kontakt@sprowadzoneauto.pl'],
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
