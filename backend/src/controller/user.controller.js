const userCtrl = {};

const User = require("../models/user");

userCtrl.getUsers = async (req, res) => {
  const users = await User.find(); // busca y guarda los usuarios
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const { name, lastname, age, cellphone, email } = req.body;
  const newUser = new User({
    name,
    lastname,
    age,
    cellphone,
    email,
  });
  await newUser.save();
  res.json({ message: "User created" });
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id); // De la request, obtenemos el parametro id
  res.json(user);
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

userCtrl.updateUser = async (req, res) => {
  const { name, lastname, age, cellphone, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    name,
    lastname,
    age,
    cellphone,
    email,
  });
  res.json({ message: "User updated" });
};

module.exports = userCtrl;
