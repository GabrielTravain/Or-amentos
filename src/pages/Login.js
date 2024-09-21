// src/pages/Login.js
import React from 'react';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../services/firebaseconfig';

function Login() {
  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Usuário logado:', result.user);
      })
      .catch((error) => {
        console.error('Erro no login:', error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginGoogle}>Login com Google</button>
    </div>
  );
}
export default Login;