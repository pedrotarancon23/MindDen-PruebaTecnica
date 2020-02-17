const Offer = require('../models/offer.model');

exports.createOffer = (req, res) => {
	var offer = new Offer(
		{
			description: req.body.description,
			type: req.body.type,
			imageIds: req.body.imageIds
		}
	);

	offer.save()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "An error occurred while creating the offer."
			});
		});
};
