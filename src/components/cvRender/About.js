import React from 'react';

function AboutRender({ about }) {
  return (
    <div className='py-2'>
      <p>{about.about}</p>
    </div>
  );
}

export default AboutRender;
