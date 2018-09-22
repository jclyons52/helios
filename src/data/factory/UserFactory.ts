import faker from "faker"
import { User } from "../domain/User";
import { Factory } from "./Factory";

export class UserFactory extends Factory<User> {
    public create({
        id = Math.random(),
        username = faker.internet.userName(),
        email = faker.internet.email()
    }: Partial<User>): User {
        return new User(id, username, email)
    }

}