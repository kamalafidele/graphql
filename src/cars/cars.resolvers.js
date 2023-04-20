const carsModel = require('./cars.model');

module.exports = {
    Query: {
        cars: (parent, args, context, info) => {
            return carsModel.getAllCars();
        },
    }
}