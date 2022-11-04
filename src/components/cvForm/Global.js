import React from 'react';

function GlobalInfos({infos, change}) {
  const { firstName, lastName, job } = infos;
  return (
    <div>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={change}
        placeholder="Nom"
      />
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={change}
        placeholder="Prénom"
      />
      <input
        type="text"
        name="job"
        value={job}
        onChange={change}
        placeholder="Your job"
      />
    </div>
  );
}

export default GlobalInfos;
