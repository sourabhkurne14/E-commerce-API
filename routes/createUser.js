const express = require('express')

const router = express.Router();

const User = require('../models/User');

router.post('/', async (req, res) => {
    try{
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err){
        res.status(400).json({ error: "User creation failed", details: err.message});
    }
});

module.exports = router;