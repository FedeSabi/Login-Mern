import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js'
import { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumno.controller.js'


const router = Router()

router.get('/alumnos', authRequired, getAlumnos )

router.get('/alumnos/:id', authRequired, getAlumno )

router.post('/alumnos', authRequired, createAlumno)

router.delete('/alumnos/:id', authRequired, deleteAlumno)

router.put('/alumnos/:id', authRequired, updateAlumno)

export default router