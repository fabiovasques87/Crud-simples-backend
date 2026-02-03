const db = require('../config/db');
const fs = require('fs');
const path = require('path');

async function initDb() {
    try {
        const sqlPath = path.join(__dirname, '../../init.sql');
        const sql = fs.readFileSync(sqlPath, 'utf8');

        await db.query(sql);
        console.log('Tabela criada com sucesso (ou já existia)!');
    } catch (err) {
        console.error('Erro ao inicializar banco de dados:', err);
    } finally {
        // Force close pool? No method exposed in db.js to close pool directly easily without importing pool.
        // For this script, we can just exit after a timeout or let node exit.
        // Ideally db.js should export a close function, but for now process.exit is fine for a script.
        process.exit();
    }
}

initDb();
