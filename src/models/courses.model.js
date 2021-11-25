import mongoose from 'mongoose';
const {Schema, model, SchemaTypes} = mongoose;
const {String, Number, ObjectId} = SchemaTypes;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true        
    },
    views: {
        type: Number,
        default: 0        
    },
    price: {
        type: String,
        required: true
    },
    students: [{
        type: ObjectId,
        ref: 'students'
    }]
});
const coursesModel = model('courses', schema);

export default coursesModel;