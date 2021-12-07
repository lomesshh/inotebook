const mongoose = require('mongoose')

const url = "mongodb+srv://lomesh:lomesh123@cluster0.t8fzs.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(url, () => {
        console.log("Connected to Mongo atlas successfully !");
    })
}

module.exports = connectToMongo;