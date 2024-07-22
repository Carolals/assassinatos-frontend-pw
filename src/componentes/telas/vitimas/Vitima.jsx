import { useState, useEffect } from "react";
import VitimaContext from "./VitimaContext";
import {
    getVitimasAPI, getVitimaPorIdAPI,
    deleteVitimaAPI, cadastraVitimaAPI
} from "../../../servicos/VitimasServico";
import { getAssassinatosAPI } from "../../../servicos/AssassinatosServico";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";

function Vitima() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaAssassinatos, setListaAssassinatos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        id: "", nome: "",
        idade: "", genero: "",
        assassinatoid: ""
    });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: "", nome: "",
        idade: "", genero: "",
        assassinatoid: ""
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getVitimaPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraVitimaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaVitimas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaVitimas = async () => {
        setCarregando(true);
        setListaObjetos(await getVitimasAPI());
        setCarregando(false);
    }

    const recuperaAssassinatos = async () => {
        setListaAssassinatos(await getAssassinatosAPI());
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteVitimaAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaVitimas();
        }
    }

    useEffect(() => {
        recuperaVitimas();
        recuperaAssassinatos();
    }, []);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', margin: 0, padding: 0}}>
        <VitimaContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto,
            listaAssassinatos
        }}>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Form />
        </VitimaContext.Provider>
        </div>
    )
}

export default Vitima;