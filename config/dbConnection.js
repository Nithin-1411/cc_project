// // const mongoose = require("mongoose");

// // const connectDB = async() => {
// // 	try
// // 	{
// // 		const db = process.env.MONGO_URI;
// // 		await mongoose.connect(db);
// // 		console.log("MongoDB connected...");
// // 	}
// // 	catch(err)
// // 	{
// // 		console.log(err);
// // 		process.exit(1);
// // 	}
// // }

// // module.exports = connectDB;
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     //mongodb+srv://<gampanithin>:<pftOt0S71h7vom2y>@cluster0.46woafz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//     //const connectionString = "mongodb://localhost:27017/database1"; // Your actual connection string
//     const connectionString = "mongodb+srv://nithin:nithin@123@cluster0.46woafz.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0";
//     await mongoose.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected...");
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString = `mongodb+srv://nithin:nithin123@cluster0.46woafz.mongodb.net/Cluster0?retryWrites=true&w=majority`; 
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit with an error code
  }
};

module.exports = connectDB;
