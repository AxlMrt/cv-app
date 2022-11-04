import React from 'react';

function About({ infos, change }) {
  const { about } = infos;
  return (
    <div>
      <textarea
        name="about"
        value={about}
        onChange={change}
        placeholder="Décrivez-vous"
      />
    </div>
  );
}

export default About;
