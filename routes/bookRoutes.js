// controllers/bookController.js
// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const authenticateUser = require('../middleware/authenticate');

// Create a new book
router.post('/', authenticateUser, bookController.createBook);

// Get all books
router.get('/', bookController.getAllBooks);

// Get books by author
router.get('/author', bookController.getBooksByAuthor);

// Get books by publication year
router.get('/publicationYear', bookController.getBooksByPublicationYear);


module.exports = router;

