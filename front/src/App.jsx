import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/*Public Pages sin logiarse */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

           {/*Login Pages acceso solo con logeo */}
          <Route element={<ProtectedRoute />}>
            <Route path="/alumno" element={<h1>alumno page</h1>} />
            <Route path="/add-alumno" element={<h1>new alumno</h1>} />
            <Route path="/alumno/:id" element={<h1>update alumno</h1>} />
            <Route path="/profile" element={<ProfilePage />} />
            
    
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};


export default App;
