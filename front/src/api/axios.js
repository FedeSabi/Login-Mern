import axios from "axios";
// este codigo es para que una vez logeado podamos navegar libremente sin volver a pedir login por cada pagina que este reservada

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    withCredentials: true
})

export default instance