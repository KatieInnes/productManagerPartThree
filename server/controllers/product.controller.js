const Product = require("../models/product.model")

module.exports.createProduct = (req, res) => {

    console.log(req.body);

    Product.create(req.body)
        .then(newlyCreatedProduct => {
            console.log('complete')
            res.json({ product: newlyCreatedProduct })
        })
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allTheProducts) => {
            res.json({ products: allTheProducts })
        })
        .catch(err => res.json(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json(oneProduct)

        })
        .catch(err => res.json(err));
}


module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch(err => res.json(err));
}


module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => {
            res.json(deleteConfirmation)
        })
        .catch(err => res.json(err));
}