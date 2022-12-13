import React, {useState} from "react";

export const User_Context = React.createContext ();

const User_Provider = ({children}) =>
{
    const [state, setState] = useState (undefined);
    return (<User_Context.Provider value={[state, setState]}>{children}</User_Context.Provider>);
}

export default User_Provider;