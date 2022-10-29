import React from 'react';
import CV from './CV';
import GlobalInfos from './cvForm/GlobalInfos';
import Educationnal from './cvForm/Educationnal';
import Experience from './cvForm/Experience';

function App() {
  const [global, setGlobal] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [storeEduc, setEduc] = React.useState([]);
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
    start: '',
    end: '',
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
  }

  function handleClick() {
    setEduc((current) => [...current, education])
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
          <h2>Formation:</h2>
          <Educationnal 
            infos={education}
            change={handleChange}
          />
        </div>
        <div>
          <h2>Experience:</h2>
          <Experience 
            infos={exp}
            change={handleChange}
          />
        </div>
      </form>
      <div className='render'>
        <CV 
          global={global}
          education={storeEduc}
        />
      </div>
    </main>
  );
}

export default App;
