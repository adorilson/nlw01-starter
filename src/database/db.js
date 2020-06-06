const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );S
    `)

    /**
    const query = `
            INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            )VALUES(?, ?, ?, ?, ?, ?, ?)
    `
    db.run(query, [
        'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'Colectoria',
        'Guilherme Gemballa, Jardim América',
        'Numero 260',
        'Santa Catarina',
        'Rio do Sul',
        'Resíduos Eletrônicos, Lâmpadas'
    ])
     */

    //db.run(`DROP TABLE places`);
})
