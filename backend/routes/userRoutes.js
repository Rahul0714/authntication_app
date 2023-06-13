const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  logoutUser,
  getProfile,
  updateProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

module.exports = router;
