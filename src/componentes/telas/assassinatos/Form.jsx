import { useContext } from "react";
import AssassinatoContext from "./AssassinatoContext";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(AssassinatoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Assassinato"
            idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtId" label="ID" tipo="number"
                placeholder="" requerido="false"
                name="id" value={objeto.id} onchange={handleChange}
                msgvalido="" msginvalido=""
                readonly={true} />
            <CampoEntrada id="txtData" label="Data" tipo="date"
                placeholder="Informe a data do ocorrido: " requerido="true"
                name="data" value={objeto.data} onchange={handleChange}
                msgvalido="Campo data OK" msginvalido="Informe a data"
                readonly={false} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                placeholder="Informe a descrição do ocorrido: " requerido="true"
                name="descricao" value={objeto.descricao} onchange={handleChange}
                msgvalido="Campo descrição OK" msginvalido="Informe a descrição"
                readonly={false} />
        </Dialogo>
    )
}

export default Form;