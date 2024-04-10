import { default as mongoose } from "mongoose";


const connectToDB = async () => {
    try {
        const connectionUrl = "mongodb+srv://anurag:anurag75@cluster0.34bmj85.mongodb.net/nextjs-stripe-ecom";

        await mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("Ecommerce database connected successfully!");
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        // You can throw the error here if you want it to propagate further
        // throw error;
    }
};


export default connectToDB;