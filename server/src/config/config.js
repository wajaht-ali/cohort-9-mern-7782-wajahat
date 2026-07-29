import dotenv from "dotenv";

dotenv.config();

const _config = {
    PORT: parseInt(process.env.PORT || '8000', 10),
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD, 
    HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
    DATABASE: process.env.DB_NAME,
};

const config = Object.freeze(_config);
export default config;