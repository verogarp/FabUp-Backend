const router = require("express").Router();

const authRouter = require("./auth.router");
const usersRouter = require("./users.router");
const adsRouter = require("./ads.router");
const categoriesRouter = require("./categories.router");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/ads", adsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
