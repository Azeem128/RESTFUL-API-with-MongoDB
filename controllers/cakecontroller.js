const Cake = require('../models/cake');

// Create a new cake
const createCake = async (req, res) => {
    const { name, price, flavor, size } = req.body;

    try {
        const newCake = new Cake({ name, price, flavor, size });
        await newCake.save();
        res.status(201).json(newCake);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all cakes
const getAllCakes = async (req, res) => {
    try {
        const cakes = await Cake.find();
        res.json(cakes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a cake by ID
const getCakeById = async (req, res) => {
    try {
        const cake = await Cake.findById(req.params.id);
        if (!cake) return res.status(404).json({ message: 'Cake not found' });
        res.json(cake);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a cake by ID
const updateCakeById = async (req, res) => {
    const { name, price, flavor, size } = req.body;

    try {
        const updatedCake = await Cake.findByIdAndUpdate(req.params.id, { name, price, flavor, size }, { new: true });
        if (!updatedCake) return res.status(404).json({ message: 'Cake not found' });
        res.json(updatedCake);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a cake by ID
const deleteCakeById = async (req, res) => {
    try {
        const deletedCake = await Cake.findByIdAndDelete(req.params.id);
        if (!deletedCake) return res.status(404).json({ message: 'Cake not found' });
        res.json({ message: 'Cake deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCake,
    getAllCakes,
    getCakeById,
    updateCakeById,
    deleteCakeById
};
