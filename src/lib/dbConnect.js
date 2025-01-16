import mongoose from "mongoose";

const dbConnect = async ({ app }) => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected.");
        return;
    }
    
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        console.log("Connected to MongoDB.");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT || 4000}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default dbConnect;