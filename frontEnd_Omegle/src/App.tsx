import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Landing } from './components/Landing';
import { Room } from './components/Room';
import { io } from 'socket.io-client';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
