import { getToken } from "../seguranca/Autenticacao";
export const getUsuariosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "authorization" : getToken()
            }
        });
    const data = await response.json();
    return data;
}

export const getUsuarioPorEmailAPI = async email => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/usuario/${email}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "authorization" : getToken()
            }
        });
    const data = await response.json();
    return data;
}

export const deleteUsuarioAPI = async email => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/usuario/${email}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "authorization" : getToken()
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraUsuarioAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/usuario`,
        {
            method : metodo,
            headers : {
                "Content-Type" : "application/json",
                "authorization" : getToken()
            },
            body : JSON.stringify(objeto)
        });
    const data = await response.json();
    return data;
}