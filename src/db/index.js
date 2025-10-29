import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILD",error);
        process.exit(1)
    }
}

export default connectDB

// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(
//             `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority&ssl=true&authSource=admin`
//         );
//         console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("❌ MONGODB CONNECTION FAILED");
//         console.log(error);
//         process.exit(1);
//     }
// };

// export default connectDB;
