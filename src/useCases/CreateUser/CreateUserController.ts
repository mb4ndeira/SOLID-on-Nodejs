import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            await this.createUserUseCase.execute({
                name, 
                email, 
                password
            })
    
            return response.status(201).send()
        } catch (err) {
            if(err instanceof Error) {
                console.error(err.message);

                return response.status(500).json({ message: err.message || 'Unexpected error.'})
            }
 
            console.error(err);

            return response.status(500).json({ message: 'Unexpected error.'})
        }
    }
}

export { CreateUserController }