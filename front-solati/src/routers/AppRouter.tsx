import { BrowserRouter, Routes, Route } from "react-router-dom";

//Rutas
import { RutaPublica } from "./RutaPublica.tsx";
// import { RutaPrivada } from "./RutaPrivada";


// Views
// import NotExist from "../views/NotExist";
import Tasks from "../views/Tasks";
import Login from "../views/Login";


export const AppRouter = () => {
  return (
    <BrowserRouter>    
      <Routes>
        <Route
            path="/login"
            element={
                <RutaPublica>
                <Login />
                </RutaPublica>
            }
        />
        <Route
            path="/tasks"
            element={
                <Tasks />
            }
        />
        <Route
            path="*"
            element={
                <Login />
            }
        />
      </Routes>
    </BrowserRouter>  
  )
}
