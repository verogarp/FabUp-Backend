import * as express from "express";
const router = express.Router();

import {
  getAllCategories,
  getCategoryById
} from "../controllers/categories.controller";

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

export default router;
