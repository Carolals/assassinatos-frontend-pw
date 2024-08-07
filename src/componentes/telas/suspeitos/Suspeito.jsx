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
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";

function Suspeito() {

    let navigate = useNavigate();
    
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
        try{
        setObjeto(await getSuspeitoPorIdAPI(id));
        setEditar(true);
        setAlerta({ status: "", message: "" });
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
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
        } catch (err){
            window.location.reload();
            navigate("login", { replace : true});
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
        try{
        setCarregando(true);
        setListaObjetos(await getSuspeitosAPI());
        setCarregando(false);
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    const recuperaAssassinatos = async () => {
        try {
        setListaAssassinatos(await getAssassinatosAPI());
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    const remover = async id => {
       try{
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteSuspeitoAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaSuspeitos();
        }
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
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
export default WithAuth(Suspeito);
