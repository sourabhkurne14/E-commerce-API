// For fetching products with the vendor id

const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const { default: mongoose } = require('mongoose');

router.get('/:vendorId', async (req, res) => {
    try{
        const vendorId = new mongoose.Types.ObjectId(req.params.vendorId);
        const Products = await Product.find({vendorId});
        res.json(Products);
    }catch(error){
        // res.status(500).json({error:"Fetching products went wrong"})
        console.error("Fetching Products went wrong:", error.message);
        res.status(500).json({ error: "Fetching products went wrong", details: error.message });
    }

});

module.exports = router;

