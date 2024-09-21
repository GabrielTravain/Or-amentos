// src/pages/Dashboard.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function Dashboard({ receitas, despesas }) {
  const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  const data = [
    { name: 'Receitas', value: totalReceitas },
    { name: 'Despesas', value: totalDespesas },
    { name: 'Saldo', value: saldo }
  ];

  const COLORS = ['#0088FE', '#FF8042', '#00C49F'];

  return (
    <div>
      <h1>Dashboard</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Dashboard;
