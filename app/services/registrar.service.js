const Offer = require('../models/offer.model');
const Image = require('../models/image.model');

function scoreImages(images) {
	var score = 0;

	if(images.length == 0) { score -= 10; }
	
	var numHDs = images.filter(function(img) {
		return img && img.quality == "HD";
	}).length;
	score += (numHDs * 20);

	var numSDs = images.length - numHDs;
	score += (numSDs * 10);

	return score;
}

function scoreDescription(description, type) {
	var score = 0;

	if(description && description.trim().length > 0) {
		score += 5;

		var numWords = description.split(" ").length;
		if(type == "PISO") {
			if(numWords >= 50) { score += 30; }
			else if(numWords >= 20) { score += 10; }
		}
		else if(type == "CHALET" && numWords > 50) { score += 20; }

		var boosterWords = ["luminoso", "nuevo", "cuidado",
			"fabuloso", "único", "excepcional", "ocasión"];
		boosterWords.forEach(function(word) {
			if(description.toLowerCase().includes(word)) { score += 5; }
		});
	}

	return score;
}

function scoreCompleteness(offer) {
	var complete = false;

	if(offer.imageIds && offer.imageIds.length > 0) {
		if(offer.type == "FRIGORIFICO" && offer.height) { 
			complete = true;
		}
		else if(offer.description && offer.description.trim().length > 0) {
			if(offer.type == "VEHICULO" && offer.km 
				&& offer.color && offer.fabricant) {
				complete = true;
			}
			else if((offer.type == "PISO" || offer.type == "CHALET") && offer.size) { 
				complete = true;
			}
		}
	}

	var score = 0;
	if(complete) { score = 40; }

	return score;
}

function normalizeScore(score) {
	if(score < 0) { score = 0; }
	else if(score > 100) { score = 100; }

	return score;
}

module.exports.scoreImages = scoreImages;
module.exports.scoreDescription = scoreDescription;
module.exports.scoreCompleteness = scoreCompleteness;
module.exports.normalizeScore = normalizeScore;
