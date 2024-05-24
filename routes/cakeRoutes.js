const express = require('express');
const {
    createCake,
    getAllCakes,
    getCakeById,
    updateCakeById,
    deleteCakeById
} = require('../controllers/cakeController');

const router = express.Router();

// Define routes
router.post('/cakes', createCake);
router.get('/cakes', getAllCakes);
router.get('/cakes/:id', getCakeById);
router.put('/cakes/:id', updateCakeById);
router.delete('/cakes/:id', deleteCakeById);

module.exports = router;
