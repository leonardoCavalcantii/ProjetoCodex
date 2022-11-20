import "./index.css";
import AbaSuperior from "../../components/AbaSuperior"
import { useEffect, useState } from "react";
    

export default function Home() {
    let [lista, setLista] = useState([]);
    let [novoItem, setNovoItem] = useState("");
    let [editaItem, setEditaItem] = useState("")
    let [novoIndex, setNovoIndex] = useState("")
    let [editaTarefa, setEditaTarefa] = useState(false)

    useEffect(() => {setLista([])}, []);

    return (
        <div>
            <AbaSuperior/>
            
            <div id="tarefaUI">
                {editaTarefa?
                <div id="aba-meio">
                    <input id="Input_Tarefa" value={editaItem} onChange={editando => setEditaItem(editando.target.value)} type="text" placeholder={editaItem} ></input>
                    <button id="Submitar" onClick={() => editandoItem(editaItem)}>Editar Tarefa</button>             
                </div>
                :
                <div id="aba-meio">
                    <input id="Input_Tarefa" value={novoItem} onChange={tarefa => setNovoItem(tarefa.target.value)} type="text" placeholder="Insira a tarefa"></input>
                    <button id="Submitar" onClick={() => adicionarNovoItem()}>Adicionar Tarefa</button>             
                </div>
                }

                <ul id="lista">
                    {lista.map((item, index) => (
                    <li>
                        <input id="caixinha" type="checkbox"></input>
                        <p id="item-lista">{item}</p>
                        
                        <button onClick={() => deletarItem(index)}>
                            <img id="lixo" src="../src/img/lixo-icon.png"></img>
                        </button>
                    
                        <button onClick={() => editarItem(lista[index], index)}>
                            <img id="editar" src="../src/img/editar-icon.png"></img>
                        </button>
                    </li>
                ))}
              </ul>
            </div>
        </div>   
      );

      function adicionarNovoItem() {
        setLista([...lista, novoItem]);
        setNovoItem("");
      }

      function deletarItem(index) {
        let tmpArray = [...lista];
        tmpArray.splice(index, 1);
        setLista(tmpArray);
      }
      
      function editarItem(texto, index) {
        setEditaTarefa(true)    
        setEditaItem(texto)
        setNovoIndex(index)
      }

      function editandoItem(texto) {
        lista[novoIndex] = texto
        setLista([...lista])
        setEditaTarefa(false)
      }

    };
