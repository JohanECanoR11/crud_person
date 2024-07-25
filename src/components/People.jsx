import PropTypes from 'prop-types';
import { Person } from './Person';

export const People = ({ persons, setPersons }) => {
  return (
    <div>
      <h2>IT Team</h2>
      <div className='container'>
        <div className='row d-flex flex-wrap row-cols-1 rom-cols-md-2 row-cols-lg-3'>
          {persons.map((person) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                img={person.img}
                role={person.role}
              />
            );
          })}
        </div>
      </div>
      {/* Renderiza en formulario para crear o editar una persona */}
      <div className="container mt-4 row p-2">
        <h2>Crear nuevo empleado</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input type="text" className="form-control" aria-describedby="nombre" />
          </div>
          <div className="mb-3">
            <label className="form-label">Cargo</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    </div>
  )
}

Person.propTypes = {
  persons: PropTypes.object,
  setPersons: PropTypes.func
}
