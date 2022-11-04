import React from 'react';

import GeneralRender from './cvRender/General';
import EducationRender from './cvRender/Education';
import ExperienceRender from './cvRender/Experience';
import AboutRender from './cvRender/About';

function CV({ global, education, experience, about }) {
  const { lastName, firstName, job } = global;

  return (
    <div className="flex w-9/12">
      <div className="h-screen w-1/3 bg-zinc-800 text-white border-solid border-2 border-black">
        <img
          src="./johnDoe.jpeg"
          alt="profil pict"
          className="w-full"
        />
        <div>
          <h2 className="text-2xl font-bold">Formation</h2>
          <EducationRender education={education} />
        </div>
      </div>
      <div className="h-screen w-full text-zinc-800 border-solid border-2 border-black">
        <GeneralRender
          last={lastName.toUpperCase()}
          first={firstName.toUpperCase()}
          job={job}
        />

        <div>
          <div>
            <h2 className="text-2xl font-bold">A propos</h2>
            <AboutRender about={about} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              Experience Professionnelle
            </h2>
            <ExperienceRender experience={experience} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
