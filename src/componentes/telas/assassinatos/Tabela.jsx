import { useContext } from "react";
import AssassinatoContext from "./AssassinatoContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
        useContext(AssassinatoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: 'red' }}>Assassinatos</h1>
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
                                <th scope="col">ID</th>
                                <th scope="col">Data</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Vítima</th>
                                <th scope="col">Suspeito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaObjetos.map(objeto => (
                                    <tr key={objeto.id}>
                                        <td align="center">
                                            <button className="btn btn-info acao-editar" title="Editar"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalEdicao"
                                            onClick={ () =>  editarObjeto(objeto.id)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className="btn btn-danger acao-deletar" title="Remover"
                                                onClick={() => { remover(objeto.id) }}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                        <th scope="row">{objeto.id}</th>
                                        <td>{objeto.data}</td>
                                        <td>{objeto.descricao}</td>
                                        <td>{objeto.vitima}</td>
                                        <td>{objeto.suspeito}</td>
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
