import{ ComponentClass,ComponentClass2} from './componentes/componenteClase';
import {  ComponenteFuncion,ComponenteFuncion2 } from './componentes/componenteFuncion';
import './App.css';

function App() {
  return (
    <div className="App">
      <ComponentClass/>
      <ComponenteFuncion/>
      <ComponenteFuncion2/>
      <ComponentClass2/>
    </div>
  );
}

export default App;
