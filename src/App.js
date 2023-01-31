import './App.css';
import Home from './layout/Home';
import Choosing from './layout/Choosing';
import Best from './layout/Best';
import Category from './layout/Category';

function App() {
  return (
    <div className="App">
      <Home/>
      <Choosing/>
      <Best/>
      <Category/>
    </div>
  );
}

export default App;
