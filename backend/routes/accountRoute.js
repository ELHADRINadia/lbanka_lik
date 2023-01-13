const express = require("express");
const router = express.Router();
const {
  getAccounts,
  setAccount,
  updateAccount,
  deleteAccount,
  getAllAccounts,
} = require("../controllers/accountController");
const { protect } = require("../middleware/authMiddleware");

router.post("/create-account", protect, setAccount);
router.get("/getAccounts", protect, getAccounts);
router.get("/getAllAccounts", getAllAccounts);
router.delete("/deleteAccount/:id", protect, deleteAccount);
router.put("/updateAccount/:id", protect, updateAccount);

module.exports = router;
