const CarService = require('../../services/CarService');

module.exports = {
    Query: {
        cars: async (parent, args, context, info) => {
            const cars = await CarService.getAllCars();
            return cars;
        },
    }
}