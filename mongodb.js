const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/loginSignup")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
})

const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})


const collection = new mongoose.model("collection", LoginSchema)
module.exports = collection;