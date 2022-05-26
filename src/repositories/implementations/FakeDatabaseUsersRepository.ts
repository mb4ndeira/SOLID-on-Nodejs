import { IUsersRepository } from "../IUsersRepository";

import { User } from "../../entities/User";

class FakeDatabaseUsersRepository implements  IUsersRepository {
    private users: User[] = []

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email)

        if(user === undefined) return null

        return user
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}

export { FakeDatabaseUsersRepository }