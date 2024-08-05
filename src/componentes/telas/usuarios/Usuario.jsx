import { useState, useEffect } from "react";
import UsuarioContext from "./UsuarioContext";
import {
    getUsuariosAPI, getUsuarioPorEmailAPI,
    deleteUsuarioAPI, cadastraUsuarioAPI
} from "../../../servicos/UsuariosServico";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";

function Usuario() {

    let navigate = useNavigate();
    
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        email: "", senha: "",
        tipo: "", telefone: "",
        nome: ""
    });

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            email: "", senha: "",
            tipo: "", telefone: "",
            nome: ""
        });
    }

    const editarObjeto = async email => {
        try{
        setObjeto(await getUsuarioPorEmailAPI(email));
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
            let retornoAPI = await cadastraUsuarioAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err){
            window.location.reload();
            navigate("login", { replace : true});
        }
        recuperaUsuarios();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const [carregando, setCarregando] = useState(false);

    const recuperaUsuarios = async () => {
        try{
        setCarregando(true);
        setListaObjetos(await getUsuariosAPI());
        setCarregando(false);
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    const remover = async email => {
       try{
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteUsuarioAPI(email);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaUsuarios();
        }
    } catch (err){
        window.location.reload();
        navigate("login", { replace : true});
    }
    }

    useEffect(() => {
        recuperaUsuarios();
    }, []);

    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', margin: 0, padding: 0 }}>
            <UsuarioContext.Provider value={{
                alerta, listaObjetos, remover,
                objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto
            }}>
                <Carregando carregando={carregando}>
                    <Tabela />
                </Carregando>
                <Form />
            </UsuarioContext.Provider>
        </div>
    )
}
export default WithAuth(Usuario);
