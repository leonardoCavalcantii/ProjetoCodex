import "./styles.css"
import {useState} from "react"

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
            password: password,
            approved: true
        }
        
        console.log(data)
        alert("Infelizmente não pudemos configurar as rotas para autenticar o login... :T Por favor, substitua '/' por '/home' na URL para prosseguir para a página principal")
    }
    
    return (
        <form>
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

            <button onClick={handleSubmit} type="button">Entrar</button> 

            <div className="redirecionamento">
                <p>Não está cadastrado? <a href="../signup">Crie uma conta</a></p>
            </div>
        </form>
    )    
}