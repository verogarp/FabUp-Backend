import * as express from "express";
const router = express.Router();
import { authenticated } from "../services/auth.service";

import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  getUserByEmail
} from "../controllers/users.controller";

router.get("/", authenticated, getAllUsers);
router.get("/:id", getUserById);
router.get("/byEmail/:email", getUserByEmail);
router.delete("/:id", authenticated, deleteUserById);
router.put("/:id", updateUser);

export default router;
