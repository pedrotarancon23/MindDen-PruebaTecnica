const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define offer db schema.
var OfferSchema = new Schema({
	description: { type: String, required: true },
	type: { type: String, required: true },
	imageIds: { type: [Number], required: true },
	size: { type: Number, required: false },
	height: { type: Number, required: false },
	km: { type: Number, required: false },
	color: { type: Number, required: false },
	fabricant: { type: Number, required: false }
});

module.exports = mongoose.model('Offer', OfferSchema);
