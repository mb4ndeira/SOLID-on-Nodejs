type Adress = {
    email: string
    name: string
}

type Message = {
    to: Adress;
    from: Adress;
    subject: string;
    body: string;
}

interface IMailProvider {
    sendMail(message: Message): Promise<void>
}

export { Message, IMailProvider }