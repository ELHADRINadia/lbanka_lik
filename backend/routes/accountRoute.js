const express = require("express");
const router = express.Router();
const {
  getAccounts,
  Create_account,
  updateAccount,
  deleteAccount,
  getAllAccounts,
} = require("../controllers/accountController");
const { protect } = require("../middleware/authMiddleware");

router.post("/create-account", protect, Create_account);
router.get("/getAccounts", protect, getAccounts);
router.get("/getAllAccounts", getAllAccounts);
router.delete("/deleteAccount/:id", protect, deleteAccount);
router.put("/updateAccount/:id", protect, updateAccount);

module.exports = router;
