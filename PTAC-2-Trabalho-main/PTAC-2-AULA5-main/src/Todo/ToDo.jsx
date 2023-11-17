import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState([]);
  const [id, setId] = useState("");
  const [idQntddGol, setQntddGol] = useState("");
  const [idNomeJogador, setNomeJogador] = useState("");

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        atividade: atividade,
        id: id,
        idQntddGol: idQntddGol,
        idNomeJogador: idNomeJogador,
      },
    ]);
    setId(id + 1);
    setAtividade("");
  };
  const remover = (id) => {
    /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
    const auxLista = [];
    lista.map((lista) => {
      if (lista.id !== id) {
        auxLista.push(lista);
      }
    });
    setLista(auxLista);
  };
  return (
    <div class="container">
      <button>
        <Link to="/">Voltar</Link>
      </button>
      <h1>Lista de Jogadores</h1>
      <form onSubmit={salvar}>
        <input
          type="text"
          value={idNomeJogador}
          onChange={(e) => {
            setNomeJogador(e.target.value);
          }}
        />
        <input
          type="number"
          value={idQntddGol}
          onChange={(e) => {
            setQntddGol(e.target.value);
          }}
        />
        <input
          type="text"
          value={atividade}
          onChange={(e) => {
            setAtividade(e.target.value);
          }}
        />
        <button>ADICIONAR</button>
      </form>
      {lista.map((ativ) => (
        <ul key={ativ.id}>
          <li>
            <p>Nome do Jogador: {ativ.idNomeJogador}</p>
            <p>Gols: {ativ.idQntddGol}</p>
            <p>Atividade: {ativ.atividade}</p>
            <button onClick={() => remover(ativ.id)}>Remover</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
