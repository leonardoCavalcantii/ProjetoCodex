import "./styles.css"
import {useState} from "react"
import api from '../../services/api'

export default function FormCadastro(props) {

    const [name, setName] = useState("");
    const [yearsOld, setYearsOld] = useState("");
    const [genre, setGenre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        const data = {
            name: name, 
            genre: genre, 
            yearsOld: yearsOld, 
            email: email, 
            password: password
        }
        
        console.log(data)
        
        const response = await api.post('/', data)
    /*
        if(response==201){
            window.location.href='/home'
        } else {
            alert("Algum erro ocorreu :T");
        }*/
    }

    return (
        <form>
            <label>
                <span>Nome completo:</span>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required>
                </input>
            </label>
            <label>
                <span>Idade:</span>
                <input 
                    type="number" min="0" max="100"
                    name="yearsOld" 
                    id="yearsOld"
                    value={yearsOld}
                    onChange={e => setYearsOld(e.target.value)}
                    required>
                </input>
            </label>
            <label> 
                <span>Gênero: </span>
                <input 
                    type="texto" 
                    name="genre" 
                    id="genre"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    required>
                </input>
            </label>
            <label>
                <span>E-mail: </span>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required>
                </input>
            </label>
            <label>
                <span>Senha:</span>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required>
                </input>
            </label>

            <button onClick={handleSubmit} type="button">Finalizar cadastro</button> 

            <div className="redirecionamento">
                <p>Já está cadastrado? <a href="../">Fazer login</a></p>
            </div>
        </form>
    )    
}