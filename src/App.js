import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MenuPrivado from './componentes/MenuPrivado'
import MenuPublico from "./componentes/MenuPublico";
import Home from './componentes/telas/Home'
import Assassinato from "./componentes/telas/assassinatos/Assassinato";
import Suspeito from "./componentes/telas/suspeitos/Suspeito";
import Vitima from "./componentes/telas/vitimas/Vitima";
import Estatisticas from "./componentes/telas/estatisticas/estatisticas";
import Usuario from "./componentes/telas/usuarios/Usuario";
import Login from "./componentes/telas/login/Login";
const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      }
      ,
      {
        path : "login",
        element : <Login/>
      }
    ]
  },
  {
    path : "/privado",
    element : <MenuPrivado/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "assassinatos",
        element : <Assassinato/>
      },
      {
        path : "vitimas",
        element : <Vitima/>
      },
      {
        path : "suspeitos",
        element : <Suspeito/>
      },
      {
        path : "estatisticas",
        element : <Estatisticas/>
      },
      {
        path : "usuarios",
        element : <Usuario/>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;