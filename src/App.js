import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link> {" | "}
        <Link to="/students">Students</Link> {" | "}
        <Link to="/instructors">Instructors</Link>
      </header>
    </div>
  );
}

export default App;
