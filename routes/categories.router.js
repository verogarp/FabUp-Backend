const router = require("express").Router();

const { getAllCategories } = require("../controllers/categories.controller");

router.get("/", getAllCategories);

module.exports = router;
