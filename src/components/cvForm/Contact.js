import React from "react";

function Contact({ infos, change }) {
  const { phone, email, address } = infos;
  return (
    <div>
      <input
        className="contact"
        type="text"
        name="phone"
        value={phone}
        onChange={change}
        placeholder="Téléphone"
      />
      <input
      className="contact"
      type="mail"
      name="email"
      value={email}
      onChange={change}
      placeholder="Email"
    />
    <input
        className="contact"
        type="number"
        name="number"
        value={address.number}
        onChange={change}
        placeholder="Numéro"
      />
      <input
        className="contact"
        type="text"
        name="street"
        value={address.street}
        onChange={change}
        placeholder="Rue"
      />
      <input
        className="contact"
        type="text"
        name="postal"
        value={address.postal}
        onChange={change}
        placeholder="Code Postal"
      />
      <input
        className="contact"
        type="text"
        name="city"
        value={address.city}
        onChange={change}
        placeholder="Ville"
      />
    </div>
  )
}

export default Contact;