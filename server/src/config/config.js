import dotenv from "dotenv";

dotenv.config();

// 1. Improved validator: Accepts the variable name to give clear error messages
const validatePort = (port, name) => {
    const parsed = Number(port); // Number() is stricter than parseInt()

    // Check if it's a valid integer and within the TCP range
    if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65535) {
        throw new Error(`Invalid ${name} configuration: "${port}". Must be a valid integer between 1 and 65535.`);
    }
    return parsed;
};

const _config = {
    PORT: validatePort(process.env.PORT || '8000', 'PORT'),
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DB_PORT: validatePort(process.env.DB_PORT || '5432', 'DB_PORT'),
    DATABASE: process.env.DB_NAME,
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
};

if (!_config.USER || !_config.PASSWORD || !_config.HOST || !_config.DATABASE) {
    throw new Error("Missing required database environment variables.");
}

const config = Object.freeze(_config);
export default config;