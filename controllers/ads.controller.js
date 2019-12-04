const AdModel = require("../models/ad.model");

module.exports = {
  getAllAds,
  getSearchAds,
  getAdById,
  deleteAdById,
  updateAd
};

function getAllAds(req, res) {
  AdModel.find()
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function getSearchAds(req, res) {
  console.log("search");
  var ObjectId = require("mongoose").Types.ObjectId;
  let category = req.query.category && new ObjectId(req.query.category);
  let orderBy = req.query.orderBy;
  console.log(category);
  let minPrice = parseInt(req.query.minPrice) || 0;
  let maxPrice = parseInt(req.query.maxPrice) || 10000000;

  AdModel.find({
    category: category, // FIXME
    $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }]
  })
    .sort(orderBy || "")
    .limit(req.query.limit ? req.query.limit : 30)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

// GET : /ads?category=moda&maxPrice=40&minPrice=10

/// GET /ADS/ALASODAD
function getAdById(req, res) {
  AdModel.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function deleteAdById(req, res) {
  AdModel.remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function updateAd(req, res) {
  AdModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
