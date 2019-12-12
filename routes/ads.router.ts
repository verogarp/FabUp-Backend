import * as express from "express";
const router = express.Router();

import { authenticated } from "../services/auth.service";

import {
  getAllAds,
  getSearchAds,
  getAdById,
  deleteAdById,
  updateAd,
  getFavoritesAds,
  createAd,
  createdAt,
  getMyAds
} from "../controllers/ads.controller";

router.get("/", getAllAds);
router.get("/search", getSearchAds);
router.get("/favorites", authenticated, getFavoritesAds);
router.get("/createdAt", authenticated, createdAt);
router.get("/mine", authenticated, getMyAds);
router.get("/:id", getAdById);
router.delete("/:id", authenticated, deleteAdById);
router.put("/:id", updateAd);
router.post("/create", createAd);

export default router;
