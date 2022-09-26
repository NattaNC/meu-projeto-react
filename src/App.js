import './App.css';

function App() {
  const name = 'Nathan'
  const newName = name.toUpperCase()
  return (
    <div className="App">
      <h1>Olá, react</h1>
      <p> Prazer em te conhecer {newName} </p>
    </div>
  );
}

export default App;
