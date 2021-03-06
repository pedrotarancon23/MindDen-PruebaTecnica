const Offer = require('../models/offer.model');

exports.findAll = (req, res) => {
	Offer.find({score: {$lte: 40}}).sort({updatedAt: 'desc'})
		.then(offers => {
			res.status(200).send(offers);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "An error occurred while retrieving offers."
			});
		});
};
