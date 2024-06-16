import emailjs from "@emailjs/browser";

export function sendNewsletter(email: string) {
    const params = {
        subject: "Modsen SHOPPE Newsletter",
        email: email,
        message: "Newsletter",
        name: "Modsen SHOPPE"
    };

    emailjs
        .send(
            import.meta.env.VITE_MAIL_SERVICE_ID!,
            import.meta.env.VITE_MAIL_TEMPLATE_ID!,
            params,
            {
                publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY!
            }
        )
        .then(() => console.log("Email sended"));
}
