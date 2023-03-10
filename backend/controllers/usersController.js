const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");

// Get all users
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports = { getUsers };
