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
        type: String,
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
    user:{ //con el login realizado, los datos ingresados le pertenecen a ese usuario!!!!
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true
    }
})

export default mongoose.model('Alumno', AlumnoSchema)