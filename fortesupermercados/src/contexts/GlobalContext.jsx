// src/contexts/GlobalContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import * as jwtDecode from 'jwt-decode';

export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
 
  useEffect(() => {
    console.log("Atualizando o usuarioLogado:", usuarioLogado);
  }, [usuarioLogado]);

  return (
    <UsuariosContext.Provider value={[ usuarioLogado, setUsuarioLogado ]}>
      {children}
    </UsuariosContext.Provider>
  );
};
