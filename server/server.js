import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user-routes";


const app = express();
app.use(express.json());

app.use("/api/user",router) 
mongoose
.connect(
    "mongodb+srv://admin:T36zxDqwe1iGvyi5@cluster0.g3nlp.mongodb.net/TravelBlog?retryWrites=true&w=majority"
)
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to database and listening to localhost 5000")
    )
    .catch((err) => console.log(err));


// T36zxDqwe1iGvyi5