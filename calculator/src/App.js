import './App.css';
import Logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo' />
      </div>
      <div className="calculator-container">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
