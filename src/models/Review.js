const { model, Schema } = require('mongoose');

const ReviewSchema = new Schema(
    {
    content: { type: String, default: null },
    reviewer: { type: String, default: null },
},
  { timestamps: true }
);

module.exports = model('Review', ReviewSchema);
