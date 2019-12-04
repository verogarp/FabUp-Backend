const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser
} = require("../controllers/users.controller");

router.get("/", authenticated, getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", authenticated, me, deleteUserById);
router.put("/:id", updateUser);

module.exports = router;
