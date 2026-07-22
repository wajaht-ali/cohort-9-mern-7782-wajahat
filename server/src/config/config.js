import dotenv from "dotenv";

dotenv.config();

const _config = {
    PORT: process.env.PORT || 8000,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD, 
    HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DATABASE: process.env.DB_NAME,
};

const config = Object.freeze(_config);
export default config;