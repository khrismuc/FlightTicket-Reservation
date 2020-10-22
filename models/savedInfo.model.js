const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const savedInfoSchema = new Schema({
    tripName:{ type: String, required: false},
    departureName:{type: Array, required: true},
    destinationName:{type: Array, required: false},
    price:{type: Number, required: true},
    carrierName:{type:String, required:false},
    userId:{type:Array, required:false},
    departureDate:{type: Array, required: false},
    time:{type: Array, required: false},
},{
    timestamps:true,
});

const SavedInfo = mongoose.model('SavedInfo', savedInfoSchema);

module.exports = SavedInfo;