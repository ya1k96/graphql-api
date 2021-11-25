import studentModel from '../models/student.model.js';

const studentResolver = {
    Query: {
        studentsCount: async () => {
            return await studentModel.count();
        },
        allStudent: async () => await studentModel.find({}),
        findStudent: async (_, args) => {
            const {name} = args;
            return await studentModel.find({name});
        }
    },
    Mutation: {
        addStudent: async (_, args) => await studentModel.create(args),
        updateOne: async (_, args) => await studentModel.updateOne(args),
        deleteOne: async (_, args) => await studentModel.deleteOne({_id: args.id})
    }    
}

export default studentResolver;