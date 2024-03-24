import { default as mongoose } from "mongoose";


const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://anurag:anurag75@cluster0.34bmj85.mongodb.net/nextjs-stripe-ecom";


    mongoose
        .connect(connectionUrl)
        .then(() => console.log("Ecommerce database connected successfully!"))
        .catch((err) => 
            console.log(`Getting Error from DB connection ${err.message}`)
        );
};


export default connectToDB;