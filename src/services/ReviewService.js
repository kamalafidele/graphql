const ReviewRepo = require('../repositories/ReviewRepo');

class ReviewService {
    static async save(data) {
        return ReviewRepo.save(data);
    }

    static async getReviewById(id) {
        return ReviewRepo.findById(id);
    }
}

module.exports = ReviewService;
