const reviewModel = require('../models/Review');

class ReviewRepo {
    static async save(data) {
        return reviewModel.create(data);
    }

    static async findById(id) {
        reviewModel.findById(id);
    }
}

module.exports = ReviewRepo;
