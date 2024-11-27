import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    photo: { type: String},
    name:{type:String},
    des:{type:String} 
});

export default mongoose.model.data||mongoose.model('data',dataSchema) 