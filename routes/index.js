const router = require("express").Router();

const authRouter = require("./auth.router");
const usersRouter = require("./users.router");
const adsRouter = require("./ads.router");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/ads", adsRouter);

module.exports = router;
