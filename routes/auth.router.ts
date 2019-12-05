import * as express from "express";
const router = express.Router();

import { login, signup } from "../controllers/auth.controller";

router.post("/signup", signup);
router.post("/login", login);

export default router;
