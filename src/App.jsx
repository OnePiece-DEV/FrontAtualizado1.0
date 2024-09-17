import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import RegisterCliente from './pages/Cadastro/RegisterCliente'; // Renomeie o arquivo se necessário
import RegisterProjetista from './pages/Cadastro/RegisterProjetista'; // Renomeie o arquivo se necessário
import Feed from './pages/feed/index';
import Home from './pages/Home/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register/cliente" element={<RegisterCliente />} />
        <Route path="/register/projetista" element={<RegisterProjetista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
