import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/telas/Home'
import Assassinato from "./componentes/telas/assassinatos/Assassinato";
import Suspeito from "./componentes/telas/suspeitos/Suspeito";
import Vitima from "./componentes/telas/vitimas/Vitima";
import Estatisticas from "./componentes/telas/estatisticas/estatisticas";
const router = createBrowserRouter([
  {
    path : "/",
    element : <Menu/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "assassinatos",
        element : <Assassinato/>
      }
      ,
      {
        path : "vitimas",
        element : <Vitima/>
      }
      ,
      {
        path : "suspeitos",
        element : <Suspeito/>
      }
      ,
      {
        path : "estatisticas",
        element : <Estatisticas/>
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