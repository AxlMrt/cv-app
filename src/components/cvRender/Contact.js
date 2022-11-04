import React from "react";

function ContactRender({contact}) {
  const {phone, email, number, street, postal, city} = contact;
  console.log(contact)
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-bold">Phone:</p>
        {phone}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Email:</p>
        {email}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Adresse:</p>
        <p>{number} {street}, {postal} {city}</p>
      </div>
    </div>
  )
}

export default ContactRender;

