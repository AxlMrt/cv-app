import React from "react";

function Experience(props) {
  const { enterprise, post, start, end } = props.infos
  return (
    <div>
      <input 
        type="text"
        name="enterprise"
        value={enterprise}
        onChange={props.change}
        placeholder="Entreprise"
      />
      <input 
        type="text"
        name="post"
        value={post}
        onChange={props.change}
        placeholder="Poste occupé"
      />
      <span>de: </span>
      <input
        type="date"
        name="start"
        value={start}
        onChange={props.change}
      />
      <span>à: </span>
      <input
        type="date"
        name="end"
        value={end}
        onChange={props.change}
      />
      <button>Ajouter</button>
    </div>
  )
}

export default Experience;