const mongoose = require("mongoose");
mongoose.Promise = global.Promise

const dbURL = process.env.DB_URL || "mongodb://localhost/todo";

module.exports = mongoose.connect(dbURL,{
    useMongoClient: true
})
.then(()=>{console.log("Connected")});