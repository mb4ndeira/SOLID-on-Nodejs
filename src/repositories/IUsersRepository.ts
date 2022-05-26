import { User } from '../entities/User' 

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}

export { IUsersRepository }