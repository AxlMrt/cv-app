import React from 'react';
import CV from './CV';
import GlobalInfos from './cvForm/Global';
import Educationnal from './cvForm/Educationnal';
import Experience from './cvForm/Experience';
import About from './cvForm/About';
import Contact from './cvForm/Contact';

function App() {
  const [global, setGlobal] = React.useState({
    firstName: '',
    lastName: '',
    job: '',
  });

  const [contact, setContact] = React.useState({
    phone: '',
    email: '',
    address: {
      number: '',
      street: '',
      postal: '',
      city: '',
    }
  })

  const [about, setAbout] = React.useState({
    about: '',
  })

  const [storeEduc, setStoreEduc] = React.useState([]);
  const [education, setEducation] = React.useState({
    school: '',
    study: '',
    start: '',
    end: '',
  });

  const [storeExp, setStoreExp] = React.useState([]);
  const [exp, setExp] = React.useState({
    enterprise: '',
    post: '',
    start1: '',
    end1: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setGlobal((current) => ({
      ...current,
      [name]: value,
    }));

    setEducation((current) => ({
      ...current,
      [name]: value,
    }));

    setExp((current) => ({
      ...current,
      [name]: value,
    }));

    setAbout((current) => ({
      ...current,
      [name]: value,
    }))

    setContact((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleEduc(event) {
    event.preventDefault();
    setStoreEduc((current) => [...current, education]);
    
    Array.from(document.querySelectorAll('.educ')).forEach(
      input => (input.value = '')
    );
    setEducation({})
  }

  function handleExp(event) {
    event.preventDefault();
    setStoreExp((current) => [...current, exp]);
    Array.from(document.querySelectorAll('.exp')).forEach(
      input => (input.value = '')
    );
    setExp({})
  }

  return (
    <main id="main">
      <form>
        <div className='global'>
          <h2>Info globale:</h2>
          <GlobalInfos
            infos={global}
            change={handleChange}
          />
        </div>
        <div>
          <h3>Description:</h3>
          <About
            infos={about}
            change={handleChange}
          />
        </div>
        <div>
          <h3>Contact</h3>
          <Contact
            infos={contact}
            change={handleChange}
          />
        </div>
        <div>
          <h2>Formation:</h2>
          <Educationnal 
            infos={education}
            change={handleChange}
            click={handleEduc}
          />
        </div>
        <div>
          <h2>Experience:</h2>
          <Experience 
            infos={exp}
            change={handleChange}
            click={handleExp}
          />
        </div>
      </form>
      <div className='flex justify-center'>
        <CV 
          global={global}
          education={storeEduc}
          experience={storeExp}
          about={about}
          contact={contact}
        />
      </div>
    </main>
  );
}

export default App;
