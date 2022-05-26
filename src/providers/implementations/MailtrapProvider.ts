import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

import { IMailProvider, Message } from '../IMailProvider'

class MailtrapProvider implements IMailProvider {
    private transporter: Mail;

    constructor () {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: { 
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASS
            }
        })
    }
    
    async sendMail(message: Message): Promise<void> {
        await this.transporter.sendMail({
            to: { 
                name: message.to.name,
                address: message.to.email,
            },
            from: { 
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
        })
    } 
}

export { MailtrapProvider }