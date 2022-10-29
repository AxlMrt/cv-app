import React from 'react';

function GlobalInfos(props) {
  const { firstName, lastName, email, phone } = props.infos
  return (
    <div>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={props.change}
        placeholder="Nom"
      />
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={props.change}
        placeholder="Prénom"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={props.change}
        placeholder="E-mail"
      />
      <input
        type="phone"
        name="phone"
        value={phone}
        onChange={props.change}
        placeholder="Téléphone"
      />
    </div>
  );
}

export default GlobalInfos;
