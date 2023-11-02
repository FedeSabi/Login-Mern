import Alumno from "../models/alumno.model.js";

export const getAlumnos = async (req, res) => {
  const Alumnos = await Alumno.find({
    user: req.user.id, //solamente nos va a mostrar los datos del usuario login
  }).populate("user"); //me va a mostrar los datos del usuario
  res.json(Alumnos);
};

export const createAlumno = async (req, res) => {
  const { nombre, apellido, genero, nacimiento, nivel, telefono, email } =
    req.body;

  console.log(req.user);

  const newAlumno = new Alumno({
    nombre,
    apellido,
    genero,
    nacimiento,
    nivel,
    telefono,
    email,
    user: req.user.id, //le pedimos que utilice el id del usuario
  });
  const savedAlumno = await newAlumno.save();
  res.json(savedAlumno);
};
export const getAlumno = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  res.json(alumno);
};

export const deleteAlumno = async (req, res) => {
  const alumno = await Alumno.findByIdAndDelete(req.params.id);
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  return res.sendStatus(204);
};

export const updateAlumno = async (req, res) => {
  const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!alumno) return res.status(404).json({ message: "Alumno not found" });
  res.json(alumno);
};
