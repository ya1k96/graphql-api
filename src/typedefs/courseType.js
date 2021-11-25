import { gql } from 'apollo-server';

const courseTypeDef = gql(`
type Course {
    id: ID,
    title: String!,
    description: String!,
    views: Int,
    price: Float!
    info: String,
    students: [Student]
}

type Query {
    coursesCount: Int!,
    allCourses: [Course],
    findCourse(title: String!): Course
}

type Mutation {
    addCourse(
        title: String!
        description: String!
        views: Int
        price: Float!
    ): Course,
    addStudentCourse(
        courseId: ID!,
        studentId: ID!
    ): Course,
    updateOne(
        title: String
        description: String
        price: Float!
    ): ID,
    deleteOne(
        id: ID!
    ): Boolean
}
`);

export default courseTypeDef;