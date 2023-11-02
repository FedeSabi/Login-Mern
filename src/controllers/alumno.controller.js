
import Alumno from "../models/alumno.model.js";

export const getAlumnos = async (req, res) => {
  const Alumnos = await Alumno.find();
  res.json(Alumnos);
};

export const createAlumno = async (req, res) => {
  const { nombre, apellido, genero, nacimiento, nivel, telefono, email } =
    req.body;
  const newAlumno = new Alumno({
    nombre,
    apellido,
    genero,
    nacimiento,
    nivel,
    telefono,
    email,
  });
  const savedAlumno = await newAlumno.save();
  res.json(savedAlumno);
};
export const getAlumno = async (req, res) => {
  const alumno = await alumno.findById(req.params.id);
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  res.json(alumno);
};

export const deleteAlumno = async (req, res) => {
  const alumno = await alumno.findByIdAndDelete(req.params.id);
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  res.json(alumno);
};

export const updateAlumno = async (req, res) => {
  const alumno = await alumno.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  res.json(alumno);
};
