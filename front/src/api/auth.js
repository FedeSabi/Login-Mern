//conectamos el front con el back con axios!!!!!!!
import axios from 'axios'
//llamamos al localhost 4000 donde esta el back
const API = 'http://localhost:4000/api'

//conexion de register del front con el back
export const registerRequest = (user) => axios.post(`${API}/register`, user)

//conexion de login del front con el back

export const  loginRequest = (user) => axios.post(`${API}/login`, user)