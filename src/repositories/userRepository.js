const db = require('../config/db');

class UserRepository {
    async findAll() {
        const result = await db.query('SELECT * FROM users ORDER BY id ASC');
        return result.rows;
    }

    async findById(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    async create(user) {
        const { name, email } = user;
        const result = await db.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        return result.rows[0];
    }

    async update(id, user) {
        const { name, email } = user;
        const result = await db.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        return result.rows[0];
    }

    async delete(id) {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
    }
}

module.exports = new UserRepository();
