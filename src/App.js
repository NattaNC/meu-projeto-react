/*
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
*/
import './App.css';
import Condicinal from './components/Condicional';


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
      <h1>Renderização </h1>
      <Condicinal />
    </div>
  ) 
}

export default App;
