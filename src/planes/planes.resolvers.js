const planesModel = require('./planes.model');

module.exports = {
    Query: {
        planes: (parent, args, context, info) => {
            return planesModel.getAllPlanes();
        },
        planesBySpeed: (_, args) => {
            return planesModel.getPlanesBySpeed(args.min, args.max);
        },
        plane: (_, args) => {
            return planesModel.getPlaneById(args.id);
        }
    },
    Mutation: {
        addNewPlane: (_, args) => {
            return planesModel.addNewPlane(args.id, args.speed, args.brand, args.origin, args.name);
        },
        addPlaneReview: (_, args) => {
            return planesModel.addPlaneReview(args.planeId, args.content, args.reviewer);
        }
    }
}