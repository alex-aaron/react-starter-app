import './App.css';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
      <Homepage age={37} firstName={'Alex'}/>
    </div>
  );
}

export default App;
