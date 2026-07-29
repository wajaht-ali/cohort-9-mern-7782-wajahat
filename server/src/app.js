import express from "express";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
const app = express();

const allowedOrigins = ['http://localhost:3000'];

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

app.use("/api/v1/authRoutes", authRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy!" })
})

export default app;