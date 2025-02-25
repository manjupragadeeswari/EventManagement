const express = require('express');
const { registerUser, loginUser, getUsers, getUserByEmail, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

// Register and Login
router.post('/register', registerUser);
router.post('/login', loginUser);

// CRUD Operations
router.get('/users', getUsers); // Get all users
router.get('/users/:email', getUserByEmail); // Get a single user by email
router.put('/users/:email', updateUser); // Update user by email
router.delete('/users/:email', deleteUser); // Delete user by email
module.exports = router;

// const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Use the user routes
// app.use('/api', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
