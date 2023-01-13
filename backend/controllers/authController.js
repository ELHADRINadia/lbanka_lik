const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//REGISTER new user
const Register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  return res.status(200).json({ name, email, password });

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Veuillez ajouter tous les champs");
  }

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("L'utilisateur existe déjà");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: "Votre compte a été créé avec succès",
    });
  } else {
    res.status(400);
    throw new Error("Données utilisateur invalides");
  }
});

// LOGIN a user
const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for user email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }

  //check for password match
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Incorrect password");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: "You have successfully logged in",
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// GET USER BY ID
const GetUserById = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "23h",
  });
};

module.exports = { Register, Login, GetUserById };
