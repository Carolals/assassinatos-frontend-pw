import { NavLink, Outlet } from 'react-router-dom';
import './Menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getUsuario, logout } from '../seguranca/Autenticacao';

const MenuPrivado = () => {
    const usuario = getUsuario();

    return (
        <div className="menu-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/privado">Registro de assassinatos</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {usuario &&
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Menu
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item" to="assassinatos">Assassinatos</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item" to="vitimas">Vitimas</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item" to="suspeitos">Suspeitos</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item" to="estatisticas">Estatísticas</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item" to="usuarios">Usuários</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="usuarioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {usuario ? `Usuário: ${usuario.email}` : "Usuário"}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="usuarioDropdown">
                                    <li className="nav-item">
                                        {usuario ?
                                            <NavLink className="dropdown-item" to="/" onClick={() => logout()}>Logout</NavLink>
                                            :
                                            <NavLink className="dropdown-item" to="/login">Login</NavLink>
                                        }
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

export default MenuPrivado;

