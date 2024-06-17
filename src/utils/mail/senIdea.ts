import emailjs from "@emailjs/browser";

interface SendIdeaOptions {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export function sendIdea(options: SendIdeaOptions) {
    const params = {
        ...options,
        name: `${options.firstName} ${options.lastName}`
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
