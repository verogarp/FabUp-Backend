const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");

const {
  getAllAds,
  getAdById,
  deleteAdById,
  updateAd
} = require("../controlers/users.controller");

router.get("/", authenticated, getAllAds);
router.get("/:id", getAdById);
router.delete("/:id", authenticated, me, deleteAdById);
router.put("/:id", updateAd);

module.exports = router;
