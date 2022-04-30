import React, { useCallback, useContext, useState } from "react";
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [] = useState([])
    const [] = useState([])

    const states = {

    }

    const setters = {

    }

    return (
        <GlobalContext.Provider value={{
            states,
            setters,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState

export const useGlobal = () => {
    return useContext(GlobalContext);
};

export const useGlobalStates = () => {
    const { states } = useGlobal();
    return states;
};

export const useGlobalSetters = () => {
    const { setters } = useGlobal();
    return setters;
};
