const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define offer db schema.
var OfferSchema = new Schema(
	{
		description: { type: String, required: false },
		type: { type: String, required: true },
		imageIds: { type: [Number], required: false },
		size: { type: Number, required: false },
		height: { type: Number, required: false },
		km: { type: Number, required: false },
		color: { type: String, required: false },
		fabricant: { type: String, required: false },
		score: { type: Number, required: false }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Offer', OfferSchema);
