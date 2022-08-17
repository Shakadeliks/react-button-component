import ColorBtn from "./ColorBtn";

function App() {

  const colors = [
    'black',
    'blue',
    'crimson',
    'darkmagenta',
    'darkgreen'
  ]

  return (
    <div className="App">
      <ColorBtn colors={colors}/>
    </div>
  );
}

export default App;
