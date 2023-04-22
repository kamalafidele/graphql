const { model, Schema } = require('mongoose');

const CarSchema = new Schema(
    {
        model: { type: String, default: null },
        weight: { type: Number, default: 0 },
        color: { type: String, default: null },
        brand: { type: String, default: null },
    },
    {
        timestamps: true,
    });

module.exports = model('Car', CarSchema);
