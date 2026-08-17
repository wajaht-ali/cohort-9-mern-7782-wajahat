import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authorization denied." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Access denied."
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            config.JWT_SECRET
        );

        req.user = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};