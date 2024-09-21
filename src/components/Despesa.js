// src/components/Despesa.js
import React, { useState } from 'react';

function Despesa({ adicionarDespesa }) {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarDespesa({ valor: parseFloat(valor), descricao });
    setValor('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
        placeholder="Valor da Despesa" 
      />
      <input 
        type="text" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        placeholder="Descrição" 
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default Despesa;
