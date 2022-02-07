const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/testemongoose')
    console.log("connected in mongodb with mongoose");
}

main().catch((err) => console.log(err))

module.exports = mongoose