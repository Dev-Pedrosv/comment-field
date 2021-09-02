import './App.css';
import React from 'react'
import Foto from './img/people.svg'




function App() {

  const [comentario, setComentario] = React.useState()
  const [todosOsComentarios, setTodosOsComentario] = React.useState([])

  function digiteiNoTextArea(eventoDoTextArea) {
    setComentario(eventoDoTextArea.target.value)
  }

  function cliquei() {
    const todosOsComentariosAnteriores = [...todosOsComentarios, comentario]

    setTodosOsComentario(todosOsComentariosAnteriores)

  }

  return (
    <div>
      <img src={Foto} alt="imagem-pessoas" />
      <textarea placeholder="Seu comentário aqui" onChange={digiteiNoTextArea}></textarea>
      <button onClick={cliquei}>Comentar</button>


      <ul>
        {todosOsComentarios.map((coment) => (
          <li key={coment} > {coment}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
