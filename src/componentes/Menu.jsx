/*import { NavLink, Outlet } from 'react-router-dom';
import './Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact="true" to="/">Registro de assassinatos</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="assassinatos">Assassinatos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="vitimas">Vitimas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="suspeitos">Suspeitos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="estatisticas">Estatísticas</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Menu;*/
import { NavLink, Outlet } from 'react-router-dom';
import './Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact="true" to="/">Registro de assassinatos</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="assassinatos">Assassinatos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="vitimas">Vitimas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="suspeitos">Suspeitos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="dropdown-item" exact="true" to="estatisticas">Estatísticas</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Menu;

