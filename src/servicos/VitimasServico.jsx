export const getVitimasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/vitima`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const getVitimaPorIdAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/vitima/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteVitimaAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/vitima/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraVitimaAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/vitima`,
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
