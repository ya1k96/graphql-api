import coursesModel from './models/courses.model.js';

const resolvers = {
    Query: {
        coursesCount: async () => {
            return await coursesModel.count();
        },
        allCourses: async () => await coursesModel.find({}),
        findCourse: async (_, args) => {
            const {title} = args;
            return await coursesModel.find({title});
        }
    },
    Mutation: {
        addCourse: async (_, args) => {
            return await coursesModel.create(args);
        }
    },
    //Estoy definiendo la forma de presentarme el Course type
    Course: { 
        info: (_) => `El curso ${_.title} tiene un costo de ${_.price}`
    }
}

export default resolvers;