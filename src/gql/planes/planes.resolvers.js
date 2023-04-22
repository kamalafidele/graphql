const PlaneService = require('../../services/PlaneService');
const ReviewService = require('../../services/ReviewService');

module.exports = {
    Query: {
        planes: async (parent, args, context, info) => {
            const planes = await PlaneService.getAllPlanes();
            return planes;
        },
        planesBySpeed: async (_, args) => {
            const planes = await PlaneService.getPlaneBySpeed(args.min, args.max);
            return planes;
        },
        plane: async (_, args) => {
            const plane = await PlaneService.getPlaneById(args.id);
            return plane;
        }
    },
    Mutation: {
        addNewPlane: async (_, { speed, brand, origin, name }) => {
            const plane = await PlaneService.save({ speed, brand, origin, name });
            return plane;
        },
        addPlaneReview: async (_, { planeId, content, reviewer }) => {
            const review = await ReviewService.save({ content, reviewer });
            const plane = await PlaneService.updatePlaneById(planeId, { $push: { reviews: review._id }});

            return plane;
        }
    }
}