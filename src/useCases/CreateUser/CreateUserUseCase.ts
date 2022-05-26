import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../providers/IMailProvider";

import { User } from "../../entities/User";

import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor (
       private mailProvider: IMailProvider,
       private usersRepository: IUsersRepository
    ) {}
 
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    
        if(userAlreadyExists) throw new Error('User already exists');

        const user = new User(data);

        await this.usersRepository.save(user).catch(error=> { throw new Error('Database saving error: ' + error.message) });

        await this.mailProvider.sendMail({ 
            to: { name: data.name, email: data.email }, 
            from: { name: 'application', email: 'register@app.com' },
            subject: 'Welcome to the application!',
            body: '<p>You can already log-in to the application.</p>'
        }).catch(error=> { throw new Error('Mailing provider error: ' + error.message) });
    }
}