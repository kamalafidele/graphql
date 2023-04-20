const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const { graphqlHTTP } = require('express-graphql');
const {  makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

dotenv.config();
const app = express();

const types = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: types,
    resolvers: resolvers,
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Graphql Server running on port ${PORT}`);
});