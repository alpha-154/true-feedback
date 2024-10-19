import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected === 1) {
    console.log("Already connected to the database");
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "truefeedback",
      bufferCommands: true,
    });

    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("Database connected successfully");
    } else if (connection.isConnected === 2) {
      console.log("Database connection in progress");
    }
    
  } catch (error) {
    console.error("Database connection failed:", error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;
