import { FakeDatabaseUsersRepository } from "../../repositories/implementations/FakeDatabaseUsersRepository";
import { MailtrapProvider } from "../../providers/implementations/MailtrapProvider";

import { CreateUserUseCase } from "./CreateUserUseCase";

import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapProvider()
const fakeDatabaseUsersRepository = new FakeDatabaseUsersRepository()

const createUserUseCase = new CreateUserUseCase(mailtrapProvider, fakeDatabaseUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }