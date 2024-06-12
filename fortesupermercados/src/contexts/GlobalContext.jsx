import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = ({children}) => {
let autor = 'Alan Patrick'
const  [usuarioLogado, setUsuarioLogado] = useState("");

    return (
        <UsuariosContext.Provider value={{autor , usuarioLogado, setUsuarioLogado}}>
            {children}
        </UsuariosContext.Provider>
    )

}