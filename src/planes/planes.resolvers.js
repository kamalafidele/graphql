const planesModel = require('./planes.model');

module.exports = {
    Query: {
        planes: (parent, args, context, info) => {
            return planesModel.getAllPlanes();
        }
    }
}