import React from 'react';

function Educationnal({ infos, change, click }) {
  const { school, study, start, end } = infos;
  return (
    <div>
      <input
        className="educ"
        type="text"
        name="school"
        value={school}
        onChange={change}
        placeholder="Ecole"
      />
      <input
        className="educ"
        type="text"
        name="study"
        value={study}
        onChange={change}
        placeholder="Etude"
      />
      <span>de: </span>
      <input
        className="educ"
        type="date"
        name="start"
        value={start}
        onChange={change}
      />
      <span>à: </span>
      <input
        className="educ"
        type="date"
        name="end"
        value={end}
        onChange={change}
      />
      <button onClick={click}>Ajouter</button>
    </div>
  );
}

export default Educationnal;
