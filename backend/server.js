// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./Routers/authRouter');
const employeeRouter = require('./Routers/authRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/employees', employeeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
