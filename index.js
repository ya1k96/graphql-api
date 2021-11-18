import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './src/typedefs/index.js';
import resolvers from './src/resolvers/index.js';

const {connect} = mongoose;

const stringConnection = 'mongodb://127.0.0.1:27017';

connect(stringConnection)
.then(() => console.log('DB connected.'));

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen()
.then(({url}) => console.log('Server ready at', url));