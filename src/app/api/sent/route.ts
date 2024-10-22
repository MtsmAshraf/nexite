import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    try{
        const formData = await request.formData();
        const brevo = require('@getbrevo/brevo');
        const username = formData.getAll("username");
        const apiInstance = new brevo.TransactionalEmailsApi();

        const apiKey = apiInstance.authentications['apiKey'];
        apiKey.apiKey = process.env.NEWER_KEY;
        const sendSmtpEmail = new brevo.SendSmtpEmail();

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
        console.log("error:", e)
        const error = JSON.stringify({
            message: e,
        });
        return new Response(error, {
            status: 500,
        })
    }
}