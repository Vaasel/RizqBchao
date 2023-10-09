const mongoose = require("mongoose");
const password = encodeURIComponent("Password");
const uri = "mongodb+srv://USER:" + password + "@vaasel.0ximno3.mongodb.net/Tripserio?retryWrites=true&w=majority";

async function dbConnect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connection established")

    } catch (error) {
        console.log("db error", error)

    }

}
module.exports = dbConnect;