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
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";

function Vitima() {

    let navigate = useNavigate();

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
        try{
            setObjeto(await getVitimaPorIdAPI(id));
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
            let retornoAPI = await cadastraVitimaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err){
            window.location.reload();
            navigate("login", { replace : true});
        }
        }
        recuperaVitimas();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaVitimas = async () => {
        try{
        setCarregando(true);
        setListaObjetos(await getVitimasAPI());
        setCarregando(false);
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    const recuperaAssassinatos = async () => {
        try{
        setListaAssassinatos(await getAssassinatosAPI());
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    const remover = async id => {
        try{
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteVitimaAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaVitimas();
        }
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
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

export default WithAuth(Vitima);