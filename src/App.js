import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'Maria'

  return (
    <div className="App">
      <Frase />
      <SayMyName nome="Nathan" />
      <SayMyName nome="Fernanda"/>
      <SayMyName nome = {nome} />
      <Pessoa nome="Nathan" idade="22" profissao="Desenvolvedor" foto="https://via.placeholder.com/150"/>
    </div> 
  );
}

export default App;
