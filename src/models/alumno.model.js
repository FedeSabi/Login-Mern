import mongoose from "mongoose";

const AlumnoSchema = new mongoose.Schema ({
    nombre:{
        type: String,
        required: true,
    }, 
    apellido: {
        type: String,
        required: true,
    },  
    genero:{
        type: String,
        required: true,
    },
    nacimiento:{
        type: Date,
        required: true,
    }, 
    nivel:{
        type: String,
        required: true,
    },
    telefono:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
})

export default mongoose.model('Alumno', AlumnoSchema)