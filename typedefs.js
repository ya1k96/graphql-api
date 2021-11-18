import { gql } from 'apollo-server';

const typeDef = gql`
type Course {
    id: ID,
    title: String!,
    description: String!,
    views: Int,
    price: Float!
    info: String
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
    ): Course
}
`;

export default typeDef;