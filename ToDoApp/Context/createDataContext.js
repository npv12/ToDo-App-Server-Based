import React, {useReducer } from 'react';




export default (reducer, action, initialState) => {
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer,initialState)
        const BoundAction = {}
        for(let key in action){
            BoundAction[key] = action[key](dispatch)
        }
        return(
            <Context.Provider value = {{state, ...BoundAction}}>
                {children}
            </Context.Provider>
        );
    }
    return {Context,Provider};
}