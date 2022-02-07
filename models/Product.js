const mongoose = require('mongoose')

const { schema } = mongoose

const Product = mongoose.model(
    'Product', 
    new mongoose.Schema({
        name: { type: String, required: true },
        price: {type: Number, required: true },
        description: {type: String, require: true},
        image: {type: String, required: true}
    })
)

module.exports = Product