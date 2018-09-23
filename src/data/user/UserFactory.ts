import faker from "faker"
import { Factory } from "../../framework/data/Factory";
import { User } from "./User";

export class UserFactory extends Factory<User> {
    public create({
        id = Math.random(),
        username = faker.internet.userName(),
        email = faker.internet.email()
    }: Partial<User>): User {
        return new User(id, username, email)
    }

}