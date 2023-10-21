const express = require("express");
const cors = require('cors');

// require("dotenv").config({ path: "./config/.env" });
require('dotenv').config();
const app = express();
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware")

// database connection
require("./db/conn.js")();

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors()); // Enable CORS for all routes


//Routes
app.use("/api/user", userRouter);
app.get('/api',(req,res)=>{
    res.send("api is working");
});
app.get("/", (req, res) => {
    res.send("app is working");
});

const server = app.listen(process.env.PORT || 5000)


process.on("uncaughtException", (error) => {
    console.log(error);
    console.log("shutting down the server due to exception")
    throw Error("i have an error")
    server.close(() => {
        process.exit(1);
    });
})



process.on("unhandledRejection", (error) => {
    console.log(error.message);
    console.log("shutting down the server due to rejection")



    server.close(() => {
        process.exit(1);
    });
})

app.use(errorMiddleware);
