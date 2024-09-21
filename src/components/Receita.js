// src/components/Receita.js
import React, { useState } from 'react';

function Receita({ adicionarReceita }) {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarReceita({ valor: parseFloat(valor), descricao });
    setValor('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
        placeholder="Valor da Receita" 
      />
      <input 
        type="text" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        placeholder="Descrição" 
      />
      <button type="submit">Adicionar Receita</button>
    </form>
  );
}

export default Receita;
