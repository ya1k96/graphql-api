import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDef from './typedefs.js';
import resolvers from './resolvers.js';

const {connect} = mongoose;

const stringConnection = 'mongodb://127.0.0.1:27017';

connect(stringConnection)
.then(() => console.log('DB connected.'));

const server = new ApolloServer({
    typeDefs: typeDef,
    resolvers
});

server.listen()
.then(({url}) => console.log('Server ready at', url));