import './index.css'

import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'

 const formularioCadastro = (
    <form className="form-cadastro">
        <Input label="Nome" type="text"/>
        <Input label="Idade" type="number"/>

        <label htmlFor="Genero">Gênero</label>
        <select className="select" id="Genero" required>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Nao binario">Não binário</option>
            <option value="Prefiro não responder">Prefiro não responder</option>
        </select>

        <Input type="email" label="E-mail"/>
        <Input type="password" label="Senha"/>

        <Button text="Finalizar cadastro"/>
    </form>
);

const jaCadastrado = (
    <div className="jacadastrado">
        <p>Já tem uma conta? <a href="/">Fazer login</a></p>
    </div>
);


export default function Signup() {
    return (
    <div>
        <Logo/>
        {formularioCadastro}
        {jaCadastrado}
    </div>
    );
}