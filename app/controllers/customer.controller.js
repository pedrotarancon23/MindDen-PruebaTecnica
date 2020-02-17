const Offer = require('../models/offer.model');

exports.findAll = (req, res) => {
	// named john and at least 18
	//MyModel.find({ name: 'john', age: { $gte: 18 }});
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
