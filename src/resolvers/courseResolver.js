import coursesModel from '../models/courses.model.js';

const courseResolver = {
    Query: {
        coursesCount: async () => {
            return await coursesModel.count();
        },
        allCourses: async () => await coursesModel.find({}).populate('students'),
        findCourse: async (_, args) => {
            const {title} = args;
            return await coursesModel.find({title}).populate('students');
        }        
    },
    Mutation: {
        addCourse: async (_, args) => await coursesModel.create(args),
        updateOne: async (_, args) => await coursesModel.updateOne(args),
        deleteOne: async (_, args) => await coursesModel.deleteOne({_id: args.id}),
        addStudentCourse: async (_, args) => {
            const {courseId, studentId} = args;
            await coursesModel.findByIdAndUpdate(courseId, {students: studentId});
        }
    },
    //Estoy definiendo la forma de presentarme el Course type
    Course: { 
        info: (_) => `El curso ${_.title} tiene un costo de ${_.price}`
    }
}

export default courseResolver;