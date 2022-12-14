const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  verifyToken,
  getUser,
  refreshToken,
} = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);

module.exports = router;
