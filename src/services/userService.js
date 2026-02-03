const userRepository = require('../repositories/userRepository');

class UserService {
    async getAllUsers() {
        return await userRepository.findAll();
    }

    async getUserById(id) {
        return await userRepository.findById(id);
    }

    async createUser(data) {
        // Validação simples (pode ser expandida)
        if (!data.name || !data.email) {
            throw new Error('Name and email are required');
        }
        return await userRepository.create(data);
    }

    async updateUser(id, data) {
        const existingUser = await userRepository.findById(id);
        if (!existingUser) {
            throw new Error('User not found');
        }
        return await userRepository.update(id, data);
    }

    async deleteUser(id) {
        const existingUser = await userRepository.findById(id);
        if (!existingUser) {
            throw new Error('User not found');
        }
        return await userRepository.delete(id);
    }
}

module.exports = new UserService();
