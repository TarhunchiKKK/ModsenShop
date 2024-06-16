import emailjs from "@emailjs/browser";

export function sendNewsletter(email: string) {
    const params = {
        subject: "Modsen SHOPPE Newsletter",
        email: email,
        message: "Newsletter",
        name: "Modsen SHOPPE"
    };

    emailjs
        .send("service_g0vodbf", "template_7q84no6", params, {
            publicKey: "xf8c9eT14OwV_44xi"
        })
        .then(() => console.log("Email sended"));
}
