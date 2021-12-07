import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div className="App">
    <NoteState>
        <Navbar />
        <div className="container">
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
      </Routes>
      </div>
    </NoteState>
    </div>
  );
}

export default App;
