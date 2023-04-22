const carModel = require('../models/Car');

class CarRepo {
    static async save(data) {
        return carModel.create(data);
    }

    static async findById(id) {
        return carModel.findById(id);
    }

    static async find({}) {
        return carModel.find({}).exec();
    }
}

module.exports = CarRepo;
