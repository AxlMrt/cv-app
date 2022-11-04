import React from 'react';

function Experience({ infos, change, click }) {
  const { enterprise, post, city, start, end } = infos;
  return (
    <div>
      <input
        className="exp"
        type="text"
        name="enterprise"
        value={enterprise}
        onChange={change}
        placeholder="Entreprise"
      />
      <input
        className="exp"
        type="text"
        name="post"
        value={post}
        onChange={change}
        placeholder="Poste occupé"
      />
      <input
        className="exp"
        type="text"
        name="city"
        value={city}
        onChange={change}
        placeholder="ville"
      />
      <span>de: </span>
      <input
        className="exp"
        type="date"
        name="start1"
        value={start}
        onChange={change}
      />
      <span>à: </span>
      <input
        className="exp"
        type="date"
        name="end1"
        value={end}
        onChange={change}
      />
      <button onClick={click}>Ajouter</button>
    </div>
  );
}

export default Experience;
