import express from 'express';
import { loginController, signupController } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signupController);

router.post('/login', loginController);

router.put('/update', (req, res) => {
    res.status(200).json({ message: "Update route working!" });
});

export { router as authRoutes };