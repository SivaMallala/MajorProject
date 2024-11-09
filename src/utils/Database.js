import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function startDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('You successfully Connected');
        return mongoose;
      })
      .catch((err) => console.log(err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default startDb;