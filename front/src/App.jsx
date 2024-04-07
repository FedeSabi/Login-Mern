
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage'
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import AlumnoPage from "./pages/AlumnoPage";
import AlumnoFormPage from "./pages/AlumnoFormPage";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Páginas públicas sin iniciar sesión */}
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Utiliza ProtectedRoute como un componente de ruta anidado */}
          <Route element={<ProtectedRoute />}> {/* ingresa atraves de <outlet /> */}
            <Route path="/alumno" element={<AlumnoPage />} />
            <Route path="/add-alumno" element={<AlumnoFormPage />} />
            <Route path="/alumno/:id" element={<AlumnoFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
