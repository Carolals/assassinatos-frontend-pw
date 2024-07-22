import { useContext } from "react";
import VitimaContext from "./VitimaContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {
    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } = useContext(VitimaContext);

    return (
        <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', padding: '20px' }}>
            <h1 style={{ color: 'red' }}>Vitimas</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={novoObjeto}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Assassinato ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map((objeto) => (
                                <tr key={objeto.id}>
                                    <td align="center">
                                        <button className="btn btn-info" title="Editar" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover" onClick={() => remover(objeto.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{objeto.id}</th>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.idade}</td>
                                    <td>{objeto.genero}</td>
                                    <td>{objeto.assassinatoid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
export default Tabela;
