const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const { graphqlHTTP } = require('express-graphql');
const {  makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

dotenv.config();
const app = express();

const types = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
    typeDefs: types,
});

const root = {
    planes: require('./src/planes/planes.model'),
    cars: require('./src/cars/cars.model'),
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Graphql Server running on port ${PORT}`);
});