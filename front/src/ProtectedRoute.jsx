// si no estas logeado no te va a dejar acceder a las paginas que estan protegidas!!!!

import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

const ProtectedRoute = () => {
const {loading, isAuthenticate} = useAuth()
 console.log(loading, isAuthenticate)
// si no esta logeado lo envia a login!!
if (loading) return <h1>
  Loading...
</h1>
if(!loading && !isAuthenticate) return <Navigate to='/login' replace />

//continua con la pagina web elegida
  return (
    <Outlet /> 
  )
}
export default ProtectedRoute