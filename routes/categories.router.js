const router = require("express").Router();

const {
  getAllCategories,
  getCategoryById
} = require("../controllers/categories.controller");

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

module.exports = router;
