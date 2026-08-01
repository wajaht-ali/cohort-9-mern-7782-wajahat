import express from 'express'; 

const router = express.Router(); 

router.post('/signup', (req, res) => {
    res.status(200).json({ message: "Signup route working!" });
});

router.post('/login', (req, res) => {
    res.status(200).json({ message: "Login route working!" });
});

router.put('/update', (req, res) => {
    res.status(200).json({ message: "Update route working!" });
});

export { router as authRoutes }; 