import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT KEY must be defined');
  }

  try {
    console.log('Connecting to mongo DB...');
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to mongo DB');
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log('Auth Service running on port:3000');
  });
};

start();
