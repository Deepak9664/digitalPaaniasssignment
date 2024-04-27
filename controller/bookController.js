
let books = [];

const createBook = async (req, res, next) => {
  try {
    const { title, author, publicationYear } = req.body;
    const newBook = { id: books.length + 1, title, author, publicationYear };
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const getBooksByAuthor = async (req, res, next) => {
  try {
    const author = req.query.author;
    const filteredBooks = books.filter(book => book.author === author);
    res.status(200).json(filteredBooks);
  } catch (err) {
    next(err);
  }
};

const getBooksByPublicationYear = async (req, res, next) => {
  try {
    const publicationYear = parseInt(req.query.publicationYear);
    const filteredBooks = books.filter(book => book.publicationYear === publicationYear);
    res.status(200).json(filteredBooks);
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, publicationYear } = req.body;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Book not found' });
    }
    books[index] = { ...books[index], title, author, publicationYear };
    res.status(200).json(books[index]);
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Book not found' });
    }
    const deletedBook = books.splice(index, 1);
    res.status(200).json(deletedBook);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBooksByAuthor,
  getBooksByPublicationYear,
  updateBook,
  deleteBook,
};