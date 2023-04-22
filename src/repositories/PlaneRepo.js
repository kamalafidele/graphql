const PlaneModel = require('../models/Plane');

class PlaneRepo {
    static async save(data) {
        return PlaneModel.create(data);
    }

    static async findById(id) {
        return PlaneModel.findById(id).populate({ path: 'reviews', model: 'Review' }).exec();
    }

    static async findPlanes() {
        return PlaneModel.find({}).populate({ path: 'reviews', model: 'Review' }).exec();
    }

    static async findBySpeed(min, max) {
        return PlaneModel.find({ speed: { $and: [{ $gt: min, $lt: max }] } })
                   .populate({ path: 'reviews', model: 'Review' })
                   .exec();
    }

    static async updateById(id, data) {
        return PlaneModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
}

module.exports = PlaneRepo;
