import { gql } from 'apollo-server';

const studentType = gql(`
type Student {
    id: ID,
    name: String!
}

type Query {
    studentsCount: Int!,
    allStudent: [Student],
    findStudent(name: String!): Student
}

type Mutation {
    addStudent(
        name: String!
    ): Student,
    updateOne(
        name: String
    ): ID,
    deleteOne(
        id: ID!
    ): Boolean
}
`);

export default studentType;