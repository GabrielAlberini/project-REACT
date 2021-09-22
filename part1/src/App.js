import './App.css';
import Nombre from './Nombre.js'
import Profesion from './Profesion.js'
import DatosEnGeneral from './DatosEnGeneral.js'

const App = () => {
  return (
    <div className="App">
      <Nombre />
      <Profesion />

      <p border-bottom='1px solid black'>Mis gustos son: </p> {/*Averiguar como implementar estilos con guiones en react, en este caso, border-bottom esta separado por un guión medio.*/}

      <DatosEnGeneral padding='5px' margin='10px auto' width='150px' border='1px solid black' color='#d97b93 ' message='Helado de frutilla'/>
      <DatosEnGeneral padding='5px' margin='10px auto' width='150px' border='1px solid black' color='#d33232' message='Mate amargo' />
      <DatosEnGeneral padding='5px' margin='10px auto' width='150px' border='1px solid black' color=' #1be6ae ' message='El porrón helado' />
      <DatosEnGeneral padding='5px' margin='10px auto' width='150px' border='1px solid black' color=' #514ea8 ' message='La siesta' />
      <DatosEnGeneral padding='5px' margin='10px auto' width='150px' border='1px solid black' color=' #c47bd9 ' message='Tu vieja' />
      <div>
        <p>(todos los datos impresos en pantalla, fueron exportados desde módulos)</p>
      </div>
    </div>
  );
}

export default App;
 