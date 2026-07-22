import express from "express";
import cors from "cors";
const app = express();

app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
))

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy!" })
})

export default app;