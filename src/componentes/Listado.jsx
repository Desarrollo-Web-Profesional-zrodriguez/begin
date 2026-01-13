/**
 * Zahir Andrés Rodríguez Mora
 */
import datos from '../datos/datos.jsx'

const Listado = () => {
 return (
  <div>
    <h2>Listado de personas</h2>
    <ul>
        {datos.map((persona) => (
            <li key={persona.id}>{persona.nombre} - {persona.edad}</li>
        ))}
    </ul>
  </div>
 )
}

export default Listado