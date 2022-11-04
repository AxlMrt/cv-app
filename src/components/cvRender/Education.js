import React from "react";

function EducationRender({education}) {
  
  const educ = education.map((items, idx) => {
    return (
      <div key={idx} className="flex gap-5">
        <p>{items.school}</p>
        <p>{items.study}</p>
        <p>{items.start}</p>
        <p>{items.end}</p>
      </div>
    )
  });
  console.log(educ)
  return (
    <div>
      {educ}
    </div>
 );
}

export default EducationRender;