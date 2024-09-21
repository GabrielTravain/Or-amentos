// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Receita from './components/Receita';
import Despesa from './components/Despesa';

function App() {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  const adicionarReceita = (novaReceita) => setReceitas([...receitas, novaReceita]);
  const adicionarDespesa = (novaDespesa) => setDespesas([...despesas, novaDespesa]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard receitas={receitas} despesas={despesas} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Receita adicionarReceita={adicionarReceita} />
      <Despesa adicionarDespesa={adicionarDespesa} />
    </Router>
  );
}

export default App;
