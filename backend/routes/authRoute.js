const express = require("express");
const router = express();
const {
  Register,
  Login,
  GetUserById,
} = require("../Controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", Register);
router.post("/Login", Login);
router.get("/GetUsersById", protect, GetUserById);

module.exports = router;
