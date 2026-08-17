import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/user.model.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

export const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters long.",
            });
        }

        const existingUser = await findUserByEmail(email.trim().toLowerCase());

        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser({
            name: name.trim(),
            email: email.toLowerCase(),
            passwordHash: hashedPassword,
        });

        return res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ message: "Email already exists." });
        }
        return res.status(500).json({
            message: "Something went wrong.",
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        const user = await findUserByEmail(email.trim().toLowerCase());

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            config.JWT_SECRET,
            {
                expiresIn: config.JWT_EXPIRES_IN
            }
        );

        return res.status(200).json({
            message: "Login successful.",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong."
        });
    }
};