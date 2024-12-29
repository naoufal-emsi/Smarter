import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string
    const mongoURI = process.env.MONGO_URI || '';
    
    if (!mongoURI) {
      console.log('Please provide MongoDB connection string in environment variables');
      return;
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

export default connectDB;