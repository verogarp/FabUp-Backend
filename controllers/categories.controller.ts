import categories from "../models/categories.model";

export function getAllCategories(req, res) {
  categories
    .find()
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

export function getCategoryById(req, res) {
  categories
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => handleError(err, res));
}

function handleError(err, res) {
  return res.status(400).json(err);
}
