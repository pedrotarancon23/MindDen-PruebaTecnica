const Offer = require('../models/offer.model');

exports.findAll = (req, res) => {
	
	Offer.find()
		.then(offers => {
			res.send(offers);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "An error occurred while retrieving offers."
			});
		});
};
