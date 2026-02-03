/**
 * User Model
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {Date} created_at
 */

class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

module.exports = User;
