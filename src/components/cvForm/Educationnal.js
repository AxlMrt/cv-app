import React from "react";

function Educationnal(props) {
  const { school, study, start, end } = props.infos
  return (
    <div>
      <input 
        type="text"
        name="school"
        value={school}
        onChange={props.change}
        placeholder="Ecole"
      />
      <input 
        type="text"
        name="study"
        value={study}
        onChange={props.change}
        placeholder="Etude"
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
  );
}

export default Educationnal;