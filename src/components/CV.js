import React from "react";

import GeneralRender from "./cvRender/GeneralRender";
import EducationRender from "./cvRender/EducationRender";

function CV(props) {
  const { lastName, firstName, email, phone } = props.global
  return (
    <GeneralRender
      last={lastName}
      first={firstName}
      email={email}
      phone={phone}
    />
  )
}

export default CV;