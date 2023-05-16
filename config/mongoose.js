const mongoose = require ('mongoose');
//const dotenv=require('dotenv')
//dotenv.config({path: 'config.env'})
//mongoose.connect("mongodb+srv://Ravi:COtJieb3AxMIo9AD@cluster0.qnb48ii.mongodb.net/")
mongoose.connect('mongodb+srv://Ravi:COtJieb3AxMIo9AD@cluster0.qnb48ii.mongodb.net/',  { 
       useNewUrlParser: true,
       //useFindAndModify: false,
       useUnifiedTopology: true
  });
const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;