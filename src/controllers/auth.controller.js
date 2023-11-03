import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

// register
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  console.log(email, password, username);

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json(['the email is ready in use']);

    const passwordHash = await bcrypt.hash(password, 10); //encryptamos el password

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login con administrador
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      const userFound = await User.findOne({ email });
      if (!userFound) return res.status(400).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(password, userFound.password);

      if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

      // Verificar si el usuario es un administrador
      let isAdmin = false; // Por defecto, el usuario no es un administrador

      // Si el usuario tiene un campo 'isAdmin' en la base de datos, verifica su valor
      if (userFound.isAdmin) {
          isAdmin = userFound.isAdmin;
      }

      const token = await createAccessToken({ id: userFound._id });

      res.cookie("token", token);
      res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          isAdmin, // Agregar isAdmin en la respuesta
          createdAt: userFound.createdAt,
          updatedAt: userFound.updatedAt,
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

/*
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password); //comparamos el password
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token); 
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */

// logout
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
// profile
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req,res) => {
  const {token} = req.cookies

  if (!token) return res.status(401).json({ message: "Unathorized" })

jwt.verify(token, TOKEN_SECRET, async (err, user) =>{
  if (err) return res.status(401).json({ message: "Unauthorized" })

  const userFound = await User.findById(user.id)
  if (!userFound) return res.status(401).json({ message: "Unauthorized" })

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  })
})
}

