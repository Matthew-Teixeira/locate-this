const usersResolvers = require('./users');
const locationResolvers = require('./locations');

const resolvers = {
    Query: {
        ...usersResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...locationResolvers.Mutation
    }
}

module.exports = resolvers;