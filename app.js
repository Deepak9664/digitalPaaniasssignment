// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/userRoutes');
 const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
// const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/postgres');

// Check the connection
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// // Routes
app.use('/v1/users', userRoutes);
 app.use('/v1/books', bookRoutes);

 // Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
