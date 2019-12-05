import * as express from "express";
const router = express.Router();

import authRouter from "./auth.router";
import usersRouter from "./users.router";
import adsRouter from "./ads.router";
import categoriesRouter from "./categories.router";

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/ads", adsRouter);
router.use("/categories", categoriesRouter);

export default router;
