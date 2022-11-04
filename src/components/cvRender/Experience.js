import React from "react";

function ExperienceRender({experience}) {
  
  const exp = experience.map((items, idx) => {
    return (
      <div key={idx} className="flex gap-5">
        <p>{items.enterprise}</p>
        <p>{items.post}</p>
        <p>{items.start1}</p>
        <p>{items.end1}</p>
      </div>
    )
  });

  return (
    <div>
      {exp}
    </div>
 );
}

export default ExperienceRender;