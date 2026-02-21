const db = require('../config/db');
const fs = require('fs');
const path = require('path');

async function initDb() {
    const sqlPath = path.join(__dirname, '../../init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    await db.query(sql);
}

// If this file is run directly (node initDb.js), perform init and exit
if (require.main === module) {
    initDb()
        .then(() => {
            console.log('Tabela criada com sucesso (ou já existia)!');
        })
        .catch((err) => {
            console.error('Erro ao inicializar banco de dados:', err);
        })
        .finally(() => process.exit());
}

module.exports = initDb;