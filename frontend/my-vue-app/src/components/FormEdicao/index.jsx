import "./styles.css"
import {useState} from "react"

export default function FormEdicao() {
    const [photo, setPhoto] = useState("https://cdn.discordapp.com/attachments/1035606895953727488/1037442017556451348/user.png")
    const [name, setName] = useState("Fulano Sicrano");
    const [yearsOld, setYearsOld] = useState(19);
    const [genre, setGenre] = useState("Prefiro não responder");

    async function handleSubmit() {
        const data = {
            photo: photo,
            name: name, 
            genre: genre, 
            yearsOld: yearsOld
        }
        
        console.log(data)
        alert("Infelizmente não pudemos configurar as rotas para editar os dados de usuario... :T")
    }

    return (
        <div className="aba-perfil">
            <h1>Editar perfil</h1>
    
            <form>
                <img src={photo}/>
                <label>
                    Alterar foto de perfil
                    <input className="file" id="foto" type="file"></input>
                </label>
                <label>
                    Alterar nome:
                    <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                </label>
                <label>
                    Alterar idade:
                    <input type="number" min='0' max='100' value={yearsOld} onChange={e => setYearsOld(e.target.value)}></input>
                </label>
                
                <label>Gênero</label>
                <select className="select">
                    <option value={genre}>Atual: {genre}</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Não binário">Não binário</option>
                    <option value="Prefiro não responder">Prefiro não responder</option>
                </select>

                <button type='submit' onClick={handleSubmit}>Salvar</button>
            </form>
        </div>
    )
}