import React from 'react'
import './index.css'

import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Button from '../../components/Button'


const formularioLogin = (
    <form className="form-login">
        <Input label="E-mail" type="email"/>
        <Input label="Senha" type="password"/>
        <Button text="Entrar"/>
    </form>
);

const criarConta = (
    <div className="naocadastrado">
        <p>Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
    </div>
);

export default function Login() {
    return (
        <div className="login">
            <Logo/>
            {formularioLogin}
            {criarConta}
        </div>
    );
};