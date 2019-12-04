const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");

const {
  getAllAds,
  getSearchAds,
  getAdById,
  deleteAdById,
  updateAd
} = require("../controlers/ads.controller");

router.get("/", getAllAds);
router.get("/search", getSearchAds);
router.get("/:id", getAdById);
router.delete("/:id", authenticated, me, deleteAdById);
router.put("/:id", updateAd);

// GET api.vero.com/api/ads?likeByMe
// router.get("", authenticated, getAllAds);
// GET api.vero.com/api/ads?  category=moda&location=madri&lat=123123&long=1231

//Revisar
// router.post("/", createAd);
// router.post("/addToFavorites", postAdToFavorites);
// router.get("/byLikes", getByCreationDate);

// Borrar
// router.get("/search", getByCategoryAndPrice);
// router.get("/byLocation", getByCategoryAndPrice);
// router.get("/byCategory", getByCategory);
// router.get("/byCreateAt", getByCreationDate);

module.exports = router;
