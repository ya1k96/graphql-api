import mongoose from 'mongoose';
const {Schema, model, SchemaTypes} = mongoose;
const {String} = SchemaTypes;

const schema = new Schema({
    name: {
        type: String
    }    
});
const studentModel = model('students', schema);

export default studentModel;