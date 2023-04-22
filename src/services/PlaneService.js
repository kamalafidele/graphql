const PlaneRepo = require('../repositories/PlaneRepo');

class PlaneService {
    static async save(data) {
        return PlaneRepo.save(data);
    }

    static async getAllPlanes() {
        return PlaneRepo.findPlanes();
    }

    static async getPlaneById(id) {
        return PlaneRepo.findById(id);
    }

    static async getPlaneBySpeed(minSpeed, maxSpeed) {
        return PlaneRepo.findBySpeed(minSpeed, maxSpeed);
    }

    static async updatePlaneById(id, data) {
        return PlaneRepo.updateById(id, data);
    }
}

module.exports = PlaneService;
