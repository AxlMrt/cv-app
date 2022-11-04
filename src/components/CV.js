import React from 'react';

import GeneralRender from './cvRender/General';
import EducationRender from './cvRender/Education';
import ExperienceRender from './cvRender/Experience';
import AboutRender from './cvRender/About';
import ContactRender from './cvRender/Contact';

function CV({ global, education, experience, about, contact }) {
  const { lastName, firstName, job } = global;

  return (
    <div className="flex w-9/12">
      <div className="h-screen w-1/3 bg-zinc-800 text-white border-solid border-2 border-black">
        <img
          src="./johnDoe.jpeg"
          alt="profil pict"
          className="w-full"
        />
        <div className='flex flex-col gap-5 text-center'>
          <h3 className='text-2xl font-bold'>Contact</h3>
          <ContactRender contact={contact}/>
        </div>
      </div>
      <div className="h-screen w-full text-zinc-800 border-2 border-black">
        <GeneralRender
          last={lastName.toUpperCase()}
          first={firstName.toUpperCase()}
          job={job}
        />

        <div className='flex flex-col gap-10 p-12'>
          <div>
            <h2 className="w-full text-2xl border-b-2 border-zinc-800 font-bold uppercase tracking-widest">A propos</h2>
            <AboutRender about={about} />
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-zinc-800">
              Experience Professionnelle
            </h2>
            <ExperienceRender experience={experience} />
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-zinc-800">Formation</h2>
            <EducationRender education={education} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
