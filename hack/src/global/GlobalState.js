import React, {useContext } from "react";
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {

    return (
        <GlobalContext.Provider value={{}}>
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
