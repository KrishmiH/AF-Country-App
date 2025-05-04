// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { connectToDb } from './utils/mongo.js';
// import registerHandler from './api/auth/register.js';
// import loginHandler from './api/auth/login.js';
// import profileHandler from './api/user/profile.js';
// import favoriteHandler from './api/user/favorite.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// app.post('/api/auth/register', (req, res) => {
//   registerHandler(req, res);
// });

// app.post('/api/auth/login', (req, res) => {
//   loginHandler(req, res);
// });

// app.get('/api/user/profile', (req, res) => {
//   profileHandler(req, res);
// });

// app.post('/api/user/favorite', (req, res) => {
//   favoriteHandler(req, res);
// });

// connectToDb()
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
