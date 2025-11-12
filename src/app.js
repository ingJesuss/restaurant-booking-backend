import express from 'express';

import connectDB from './config/database.js';

const app = express();


const { PORT = 5000 } = process.env;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 ervidor corriendo en el puerto: ${PORT}`);
  });
}
startServer();


export default app;

