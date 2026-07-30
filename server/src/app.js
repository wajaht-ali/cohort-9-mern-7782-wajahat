import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import config from "./config/config.js";
const app = express();

const allowedOrigins = config.CORS_ORIGIN.split(',');

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;