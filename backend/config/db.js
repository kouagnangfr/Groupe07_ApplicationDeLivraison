import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://2714816:WUTvG3e7f7naaleb@cluster0.9a7uk0g.mongodb.net/food-del')
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.