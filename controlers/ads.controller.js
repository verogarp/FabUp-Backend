const AdModel = require("../models/ad.model");

module.exports = {
  getAllAds,
  getAdById,
  deleteAdById,
  updateAd
};

function getAllAds(req, res) {
  UserModel.find()
    .then(response => res.json(response))
    .catch(err => handdleError(err, res));
}

function getAdById(req, res) {
  UserModel.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handdleError(err, res));
}

function deleteAdById(req, res) {
  UserModel.remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res));
}

function updateAd(req, res) {
  UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
