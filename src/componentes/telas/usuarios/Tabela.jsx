import { useContext } from "react";
import UsuarioContext from "./UsuarioContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
        useContext(UsuarioContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: 'red' }}>Usuários</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
            data-bs-toggle="modal" data-bs-target="#modalEdicao"
            onClick={ () =>  novoObjeto()}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos.length === 0 &&
                <h1>Nenhum registro encontrado</h1>}
            {listaObjetos.length > 0 &&
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{
                                    textAlign: 'center'
                                }}>Ações</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaObjetos.map(objeto => (
                                    <tr key={objeto.email}>
                                        <td align="center">
                                            <button className="btn btn-info" title="Editar"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalEdicao"
                                            onClick={ () =>  editarObjeto(objeto.email)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className="btn btn-danger" title="Remover"
                                                onClick={() => { remover(objeto.email) }}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                        <th scope="row">{objeto.email}</th>
                                        <td>{objeto.tipo}</td>
                                        <td>{objeto.telefone}</td>
                                        <td>{objeto.nome}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Tabela;
