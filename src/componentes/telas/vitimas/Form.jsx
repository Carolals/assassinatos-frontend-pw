import { useContext } from "react";
import VitimaContext from "./VitimaContext";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta, listaAssassinatos } = useContext(VitimaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Produto" idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtId" label="ID" tipo="number" placeholder="" requerido="false" name="id" value={objeto.id} onchange={handleChange} msgvalido="" msginvalido="" readonly={true} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text" placeholder="Informe o nome" requerido="true" name="nome" value={objeto.nome} onchange={handleChange} msgvalido="Campo nome OK" msginvalido="Informe o nome" readonly={false} />
            <CampoEntrada id="txtIdade" label="Idade" tipo="text" placeholder="Informe a idade" requerido="true" name="idade" value={objeto.idade} onchange={handleChange} msgvalido="Campo idade OK" msginvalido="Informe a idade" readonly={false} />
            <CampoSelect id="selectGenero" label="Genero" requerido="true" name="genero" value={objeto.genero} onchange={handleChange} msgvalido="Campo genero OK" msginvalido="Informe o genero" readonly={false}>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </CampoSelect>
            <CampoSelect id="selectAssassinatoid" label="Assassinatoid" requerido="true" name="assassinatoid" value={objeto.assassinatoid} onchange={handleChange} msgvalido="Campo Assassinatoid OK" msginvalido="Informe o Assassinatoid" readonly={false}>
                {listaAssassinatos.map((ass) => (
                    <option value={ass.id} key={ass.id}>{ass.descricao}</option>
                ))}
            </CampoSelect>
        </Dialogo>
    );
}
export default Form;
