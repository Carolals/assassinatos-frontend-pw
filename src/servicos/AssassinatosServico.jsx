export const getAssassinatosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/assassinato`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const getAssassinatoPorIdAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/assassinato/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteAssassinatoAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/assassinato/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraAssassinatoAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/assassinato`,
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