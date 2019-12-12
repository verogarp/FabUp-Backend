import AdModel from "../models/ad.model";

export function getAllAds(req, res) {
  AdModel.find()
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getSearchAds(req, res) {
  var ObjectId = require("mongoose").Types.ObjectId;
  let category = req.query.category && new ObjectId(req.query.category);

  let lat = req.query.lat;
  let lon = req.query.lon;

  let minPrice = parseInt(req.query.minPrice) || 0;
  let maxPrice = parseInt(req.query.maxPrice) || 10000;

  var query = category
    ? AdModel.find({
        category
      })
    : AdModel;

  query =
    lat && lon
      ? query.find({
          location: {
            $near: {
              $maxDistance: 1,
              $geometry: { type: "Point", coordinates: [lat, lon] }
            }
          }
        })
      : query;

  query
    .find({
      $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }]
    })
    .limit(req.query.limit ? req.query.limit : 30)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getMyAds(req, res) {
  AdModel.find({ author: req.reboot_user.email })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getFavoritesAds(req, res) {
  AdModel.find({ numLikes: { $gte: 1 } })
    .sort("numLikes")
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function createdAt(req, res) {
  AdModel.find()
    .sort("createdAt")
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getAdById(req, res) {
  AdModel.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function deleteAdById(req, res) {
  AdModel.remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function updateAd(req, res) {
  AdModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}
export function createAd(req, res) {
  AdModel.create(req.body)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
