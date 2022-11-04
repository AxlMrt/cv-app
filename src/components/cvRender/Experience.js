import React from "react";

function ExperienceRender({experience}) {
  
  const exp = experience.map((items, idx) => {
    const start1 = items.start1.substring(0, items.start1.lastIndexOf("-"));
    const end1 = items.end1.substring(0, items.end1.lastIndexOf("-"));
    return (
      <div key={idx} className="flex gap-5 py-2">
        <div className="flex gap-5">
          <p>{start1}</p>
          <p>{end1}</p>
        </div>
        <div>
          <p className="font-medium text-lg">{items.post}</p>
          <p>{items.enterprise} à {items.city}</p>
        </div>
          
        
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