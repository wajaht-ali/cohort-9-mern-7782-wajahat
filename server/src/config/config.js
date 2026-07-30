import dotenv from "dotenv";

dotenv.config();

const validatePort = (port) => {
    const parsed = parseInt(port, 10);
    if (isNaN(parsed) || parsed < 1 || parsed > 65535) {
        throw new Error(`Invalid PORT configuration: ${port}. Must be a number between 1 and 65535.`);
    }
    return parsed;
};

const _config = {
    PORT: validatePort(process.env.PORT || '8000'),
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DB_PORT: validatePort(process.env.DB_PORT || '5432'),
    DATABASE: process.env.DB_NAME,
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000'
};

if (!_config.USER || !_config.PASSWORD || !_config.HOST || !_config.DATABASE) {
    throw new Error("Missing required database environment variables.");
}

const config = Object.freeze(_config);
export default config;