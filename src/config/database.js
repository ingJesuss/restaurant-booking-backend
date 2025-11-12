import mongoose from "mongoose";
import dotenv from "dotenv-flow";
dotenv.config();

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    throw new Error("❌ MONGO_URI no está definido en las variables de entorno");
    process.exit(1);
  }
  try{
    await mongoose.connect(mongoURI);
    console.log(`📊 MongoDB conectado en: ${mongoURI}`);
  }catch(err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
    process.exit(1);
  }
}

export default connectDB;