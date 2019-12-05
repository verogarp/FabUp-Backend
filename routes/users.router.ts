import * as express from "express";
const router = express.Router();
import { authenticated, me } from "../services/auth.service";

import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} from "../controllers/users.controller";

router.get("/", authenticated, getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", authenticated, me, deleteUserById);
router.put("/:id", updateUser);

export default router;
