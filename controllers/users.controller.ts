import UserModel from "../models/users.model";

export function getAllUsers(req, res) {
  UserModel.find()
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getUserById(req, res) {
  UserModel.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function deleteUserById(req, res) {
  UserModel.remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function updateUser(req, res) {
  UserModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
