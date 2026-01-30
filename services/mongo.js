const mongoose = require('mongoose');

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
          console.log(process.env.MONGO_URI)
        return conn;
      
    } catch (error) {
        console.log(error)
    }


}