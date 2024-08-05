import { useContext } from "react";
import UsuarioContext from "./UsuarioContext";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";
function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta }
        = useContext(UsuarioContext);

    return (
        <Dialogo id="modalEdicao" titulo="Usuario"
            idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtEmail" label="E-mail" tipo="email"
                placeholder="Informe o e-mail" requerido="true"
                name="email" value={objeto.email} onchange={handleChange}
                msgvalido="Campo e-mail ok" msginvalido="Informe um e-mail"
                readonly={false} />
                 <CampoEntrada id="txtSenha" label="Senha" tipo="password"
                placeholder="Informe a senha" requerido="true"
                name="senha" value={objeto.senha} onchange={handleChange}
                msgvalido="Campo senha OK" msginvalido="Informe a senha"
                readonly={false} />
                <CampoSelect id="selectTipo" label="Tipo" requerido="true" name="tipo" value={objeto.tipo} onchange={handleChange} msgvalido="Campo tipo OK" msginvalido="Informe o tipo" readonly={false}>
                <option value="A">Administrador</option>
                <option value="U">Usuario</option>
            </CampoSelect>
            <CampoEntrada id="txtTelefone" label="Telefone" tipo="string"
                placeholder="Informe o telefone" requerido="true"
                name="telefone" value={objeto.telefone} onchange={handleChange}
                msgvalido="Campo telefone OK" msginvalido="Informe o número de telefone"
                readonly={false} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                placeholder="Informe o nome" requerido="true"
                name="nome" value={objeto.nome} onchange={handleChange}
                msgvalido="Campo nome OK" msginvalido="Informe o nome"
                readonly={false} />
        </Dialogo>
    )
}

export default Form;
