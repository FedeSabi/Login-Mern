
//conectamos el front con el back con axios!!!!!!!
import axios from "./axios"

//conexion de register del front con el back
export const registerRequest = (user) => axios.post(`/register`, user)

//conexion de login del front con el back

export const  loginRequest = (user) => axios.post(`/login`, user)

//verificacion una vez ingresado en el login verifica que este el token de usuario
export const verityTokenRequet = () => axios.get('/verify')