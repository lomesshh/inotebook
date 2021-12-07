import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <NoteState>
        <Navbar />
        <div className="container">
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/signup' exact element={<Signup/>} />
      </Routes>
      </div>
    </NoteState>
    </div>
  );
}

export default App;
