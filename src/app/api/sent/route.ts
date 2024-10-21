import { NextRequest } from "next/server";


export async function POST(request: NextRequest){
    try{
        const formData = await request.formData();
        const username = formData.get("username");
        const brevo = require('@getbrevo/brevo');
        let apiInstance = new brevo.TransactionalEmailsApi();

        let apiKey = apiInstance.authentications['apiKey'];
        apiKey.apiKey = "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";

        let sendSmtpEmail = new brevo.SendSmtpEmail();

        sendSmtpEmail.subject = "Message from website";
        sendSmtpEmail.htmlContent = `<html><body><h1>${username}</h1></body></html>`;
        sendSmtpEmail.sender = { "name": "User", "email": "mo32000a@gmail.com" };
        sendSmtpEmail.to = [
            { "email": "mo32000a@gmail.com", "name": "Moatasim" }
        ];
        // sendSmtpEmail.replyTo = { "email": "shubham.upadhyay@sendinblue.com", "name": "Shubham Upadhyay" };
        // sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
        // sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };


        const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

        return new Response(JSON.stringify(response), {
            status: 200,
        })
    }catch (e){
        const error = JSON.stringify({
            message: e,
        });
        return new Response(error, {
            status: 500,
        })
    }
}