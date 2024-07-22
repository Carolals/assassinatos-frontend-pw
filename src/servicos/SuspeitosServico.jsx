export const getSuspeitosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/suspeito`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const getSuspeitoPorIdAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/suspeito/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteSuspeitoAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/suspeito/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraSuspeitoAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/suspeito`,
        {
            method : metodo,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(objeto)
        });
    const data = await response.json();
    return data;
}