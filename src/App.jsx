/**
 * Zahir Andrés Rodríguez Mora
 */
// este ees un componente con parámetros y se puede definir una función
// Componentes con mayúscula al inicio
import Listado from './componentes/Listado.jsx'
import Saludo from './componentes/Saludo.jsx'
const App = () => {
  console.log('Componente Saludo')
  return (
    <>
      <Saludo nombre="Zahir" edad={25}/>
      <Saludo nombre="Andrés" edad={30}/>
      <Listado/>
    </>
  )
}

export default App
