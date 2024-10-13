const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Certifique-se de importar o modelo de usuário
const { register, login } = require('../controllers/authController');


router.post('/register', register);


router.post('/login', login);



router.get('/users', async (req, res) => {
    console.log("Rota /users chamada");
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

        
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

        await user.remove();
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;
