import { useState } from 'react';
import { People } from './components/People';

function App() {

  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Johan",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      id: 2,
      name: "Eduardo",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png"
    },
    {
      id: 3,
      name: "Cano",
      role: "FullStack Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    }
  ]);

  return (
    <div className='App'>
      <div className='container'>
        <People 
          persons={persons} 
          setPersons={setPersons}
        />
      </div>
    </div>
  )
}

export default App
