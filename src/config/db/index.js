import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/blog_dev');
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!', error);
  }
}

export { connect };
