import './styles.css'

let user = {
    foto: "../../src/img/default-user-img.png",
    nome: "Fulano Sicrano"
}

export default function AbaSuperior() {
    return (
    <div id="aba-superior">  
        <div id="lado-esquerdo">
            <img src={user.foto}></img>
            <div className="boas-vindas">
                <h1> Bem-vindo, {user.nome}!</h1>
                <div className="nav">
                    <a href="/profile">Editar perfil</a>
                    <a className="saida" href="/"><img src="../../src/img/logout.png"/></a>
                </div>
            </div>
        </div>
    </div>
    )
};