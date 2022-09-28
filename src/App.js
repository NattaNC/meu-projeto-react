/*
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
*/
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';


function App() {
  /*
  return (
    <div className="App">      
      <Frase />
      <SayMyName nome="Nathan" />
      <SayMyName nome="Fernanda"/>
      <SayMyName nome = {nome} />
      <Pessoa 
      nome="Nathan" 
      idade="22" 
      profissao="Desenvolvedor" 
      foto="https://via.placeholder.com/150"
      />
      <List />
    </div> 
  );
  */

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento />
      <Form />
    </div>
  ) 
}

export default App;
