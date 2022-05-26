import { User } from '../entities/User' 

interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>;
}

export { IUsersRepository }