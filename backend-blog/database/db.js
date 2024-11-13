import mongoose from "mongoose";

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blog-application.2chkx.mongodb.net/?retryWrites=true&w=majority&appName=blog-application`;
    try {
        await mongoose.connect(URL);
        console.log("database cconnected successfuly");
    } catch (error) {
        console.log("Error while connecting with the databse", error);
    }
}

export default Connection;