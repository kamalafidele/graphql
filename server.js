const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const { ApolloServer } = require('apollo-server-express');
const {  makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

dotenv.config();

const types = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: types,
        resolvers: resolvers,
    });

    const server = new ApolloServer({
        schema: schema
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    const PORT = process.env.PORT || 5500;
    app.listen(PORT, () => {
    console.log(`Graphql Server running on port ${PORT}`);

});
}

(async () => {
    try {
        await startApolloServer();
    } catch (e) {
        console.log('Starting apollo server failed ', e);
    }
})();