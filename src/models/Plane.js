const { model, Schema } = require('mongoose');

const PlaneSchema = new Schema({
    speed: { type: Number, default: 0 },
    brand: { type: String, default: null },
    origin: { type: String, default: null },
    name: { type: String, default: null },
    reviews: [
        { type: Schema.Types.ObjectId, ref: 'Review' },
    ],
}, 
{ timestamps: true },
);

module.exports = model('Plane', PlaneSchema);
