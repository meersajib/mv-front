import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()



const initialState = {
	isLoggedIn: false,
  userName:'Guest'
}


const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState)

	const setUserName = payload => {
		dispatch({ type: 'SET_USER_NAME', payload })
	}

	const setIsLoggedIn = payload => {
		dispatch({ type: 'SET_ISLOGGED_IN', payload })
	}

	const actions = {
		setIsLoggedIn,
		setUserName
	}

	return (
		<GlobalContext.Provider value={state} >
			<GlobalUpdateContext.Provider value={actions}>
				{children}
			</GlobalUpdateContext.Provider>
		</GlobalContext.Provider>
	);
}

export default GlobalContextProvider;