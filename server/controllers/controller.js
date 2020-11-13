const {Author} = require('../models/author.model')

module.exports.index = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))
}

module.exports.singleAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body
    Author.create({name})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(500).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((err) => res.status(400).json(err));
}