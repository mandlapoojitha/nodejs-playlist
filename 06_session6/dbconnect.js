// const mongoose = require('mongoose')
// if(!process.env.MONGO_URI){
//     console.log("please set the mongo uri environment variable");
//     return;
// }

// let connection;

// async function dbConnect(){
//     if (connection) return;
//     try{
//         connection = await mongoose.connect(process.env.MONGO_URI);

//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports =dbConnect;


const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

// Call the function to connect to MongoDB
dbConnect();
