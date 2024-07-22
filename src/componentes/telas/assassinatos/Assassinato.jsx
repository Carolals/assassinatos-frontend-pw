import { useState, useEffect } from "react";
import AssassinatoContext from "./AssassinatoContext";
import {
    getAssassinatosAPI, getAssassinatoPorIdAPI,
    deleteAssassinatoAPI, cadastraAssassinatoAPI
} from "../../../servicos/AssassinatosServico";
import { getVitimasAPI } from "../../../servicos/VitimasServico";
import { getSuspeitosAPI } from "../../../servicos/SuspeitosServico";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";

function Assassinato() {
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaVitimas, setListaVitimas] = useState([]);
    const [listaSuspeitos, setListaSuspeitos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ id: "", nome: "" });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: 0,
            data: "",
            descricao: "",
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getAssassinatoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraAssassinatoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaAssassinatos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaAssassinatos = async () => {
        setCarregando(true);
        setListaObjetos(await getAssassinatosAPI());
        setCarregando(false);
    }

    const recuperaVitimas = async () => {
        setListaVitimas(await getVitimasAPI());
    }

    const recuperaSuspeitos = async () => {
        setListaSuspeitos(await getSuspeitosAPI());
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteAssassinatoAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaAssassinatos();
        }
    }

    useEffect(() => {
        recuperaAssassinatos();
        recuperaVitimas();
        recuperaSuspeitos();
    }, []);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', margin: 0, padding: 0 }}>
        <AssassinatoContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto,
            listaSuspeitos: listaSuspeitos || [], listaVitimas: listaVitimas || []
        }}>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Form />
        </AssassinatoContext.Provider>
        </div>
    )
}
export default Assassinato;

