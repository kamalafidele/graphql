const CarRepo = require('../repositories/CarRepo');

class CarService {
    static async save(data) {
        return CarRepo.save(data);
    }

    static async getCarById(id) {
        return CarRepo.findById(id);
    }

    static async getAllCars() {
        return CarRepo.find();
    }
    
}

module.exports = CarService;
