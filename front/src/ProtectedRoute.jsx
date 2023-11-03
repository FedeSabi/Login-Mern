// si no estas logeado no te va a dejar acceder a las paginas que estan protegidas!!!!

import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {
const {loading, isAuthenticated} = useAuth()
 console.log(loading, isAuthenticated)

if (loading) return <h1>
  Loading...
</h1>
if(!loading && !isAuthenticated) return <Navigate to="/login" replace />

//continua con la pagina web elegida
  return (
    <Outlet /> 
  )
}
export default ProtectedRoute