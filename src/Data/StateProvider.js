import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./Reducer";

// this prepares the data layer
export const StateContext = createContext();

// wraps our app and provides data layer to every component
export const StateProvider = ({ reducer, intialState, children }) => (
    <StateContext.Provider value = { useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);

// pulls indormation from the data layer
export const useStateValue = () => useContext(StateContext);