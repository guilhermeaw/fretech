import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import User, { UserRole } from "../entities/User";
import BCryptHashProvider from "../providers/BCryptHashProvider";

export class UserSeeder implements Seeder {
    private hashProvider: BCryptHashProvider;
    
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const userRepository = dataSource.getRepository(User);

        const hashedPassword = await this.hashProvider.generateHash('fretech-adm');

        const userData = {
            name: 'admin',
            email: 'fretech@gmail.com',
            password: hashedPassword,
            role: UserRole.ADMINISTRATOR,
            phone: '51 996798130'
        }

        const newUser = userRepository.create(userData);
        await userRepository.save(newUser);
    }
}