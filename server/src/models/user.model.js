import { pool } from '../config/db.js';

export const createUser = async ({ name, email, passwordHash }) => {
    const query = {
        text: `
            INSERT INTO users (name, email, password_hash)
            VALUES ($1, $2, $3)
            RETURNING id, name, email, created_at, updated_at;
        `,
        values: [name, email, passwordHash],
    };

    const { rows } = await pool.query(query);
    return rows[0];
};

export const findUserByEmail = async (email) => {
    const query = {
        text: `
            SELECT id, name, email, password_hash, created_at, updated_at
            FROM users
            WHERE email = $1
            LIMIT 1;
        `,
        values: [email],
    };

    const { rows } = await pool.query(query);
    return rows[0] ?? null;
};