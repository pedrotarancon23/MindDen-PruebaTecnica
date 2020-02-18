const Offer = require('../models/offer.model');
const Image = require('../models/image.model');

const RegistrarService = require('../services/registrar.service');

exports.createOffer = (req, res) => {
	var offer = new Offer(
		{
			description: req.body.description,
			type: req.body.type,
			imageIds: req.body.imageIds,
			size: req.body.size,
			height: req.body.height,
			km: req.body.km,
			color: req.body.color,
			fabricant: req.body.fabricant
		}
	);

	/* Sé que hacer aquí la consulta no es lo mejor ni lo más elegante.
	 * Pero he decidido hacerlo así por simplicidad en este caso.
	 */
	Image.find({customId: {$in: offer.imageIds}})
		.then(images => {
			var score = 0;
			score += RegistrarService.scoreImages(images);
			score += RegistrarService.scoreDescription(offer.description, offer.type);
			score += RegistrarService.scoreCompleteness(offer);
			score = RegistrarService.normalizeScore(score);
			offer.score = score;

			offer.save()
				.then(data => {
					res.status(201).send(data);
				})
				.catch(err => {
					res.status(500).send({
						message: err.message || "An error occurred while creating the offer."
					});
				});
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "An error occurred while retrieving images."
			});
		});
};
