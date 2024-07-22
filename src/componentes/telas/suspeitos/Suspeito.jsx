/*import { useState, useEffect } from "react";
import SuspeitoContext from "./SuspeitoContext";
import {
    getSuspeitosAPI, getSuspeitoPorIdAPI,
    deleteSuspeitoAPI, cadastraSuspeitoAPI
} from "../../../servicos/SuspeitosServico";
import { getAssassinatosAPI } from "../../../servicos/AssassinatosServico";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";

function Suspeito() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaAssassinatos, setListaAssassinatos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        id: "", nome: "",
        idade: "", genero: "",
        relacaocomvitima: "",
        assassinatoid: ""
    });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: "", nome: "",
            idade: "", genero: "",
            relacaocomvitima: "",
            assassinatoid: ""
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getSuspeitoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraSuspeitoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaSuspeitos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaSuspeitos = async () => {
        setCarregando(true);
        setListaObjetos(await getSuspeitosAPI());
        setCarregando(false);
    }

    const recuperaAssassinatos = async () => {
        setListaAssassinatos(await getAssassinatosAPI());
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteSuspeitoAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaSuspeitos();
        }
    }

    useEffect(() => {
        recuperaSuspeitos();
        recuperaAssassinatos();
    }, []);

    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <SuspeitoContext.Provider value={{
                alerta, listaObjetos, remover,
                objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto,
                listaAssassinatos
            }}>
                <Carregando carregando={carregando}>
                    <Tabela />
                </Carregando>
                <Form />
            </SuspeitoContext.Provider>
        </div>
    )
}

export default Suspeito;*/
import { useState, useEffect } from "react";
import SuspeitoContext from "./SuspeitoContext";
import {
    getSuspeitosAPI, getSuspeitoPorIdAPI,
    deleteSuspeitoAPI, cadastraSuspeitoAPI
} from "../../../servicos/SuspeitosServico";
import { getAssassinatosAPI } from "../../../servicos/AssassinatosServico";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";

function Suspeito() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaAssassinatos, setListaAssassinatos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        id: "", nome: "",
        idade: "", genero: "",
        relacaocomvitima: "",
        assassinatoid: ""
    });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: "", nome: "",
            idade: "", genero: "",
            relacaocomvitima: "",
            assassinatoid: ""
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getSuspeitoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraSuspeitoAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaSuspeitos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaSuspeitos = async () => {
        setCarregando(true);
        setListaObjetos(await getSuspeitosAPI());
        setCarregando(false);
    }

    const recuperaAssassinatos = async () => {
        setListaAssassinatos(await getAssassinatosAPI());
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteSuspeitoAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaSuspeitos();
        }
    }

    useEffect(() => {
        recuperaSuspeitos();
        recuperaAssassinatos();
    }, []);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', margin: 0, padding: 0 }}>
            <SuspeitoContext.Provider value={{
                alerta, listaObjetos, remover,
                objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto,
                listaAssassinatos
            }}>
                <Carregando carregando={carregando}>
                    <Tabela />
                </Carregando>
                <Form />
            </SuspeitoContext.Provider>
        </div>
    )
}
export default Suspeito;
