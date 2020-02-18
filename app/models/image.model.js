const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define image db schema.
var ImageSchema = new Schema(
	{
		customId: { type: Number, required: true },
		url: { type: String, required: true },
		quality: { type: String, required: true }
	}
);

module.exports = mongoose.model('Image', ImageSchema);
