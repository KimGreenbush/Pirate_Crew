const {Pirate} = require('../models/pirate.model')

module.exports.index = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.status(400).json(err))
}

module.exports.singlePirate = (req, res) => {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators: true})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(500).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.findOneAndDelete({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json(err));
}