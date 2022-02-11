import { Schema, model } from 'mongoose';

const productsSchema = new Schema ({
    name: String,
    category: String,
    price: Number,
    imgUrl: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productsSchema);