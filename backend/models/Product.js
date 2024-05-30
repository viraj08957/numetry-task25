const mongoose = require('mongoose');
const {Schema} = mongoose;




const ProductSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    productName : {
        type : String,
        required : true
    },
    productPrice : {
        type : Number,
        required: true
    }
});
const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;