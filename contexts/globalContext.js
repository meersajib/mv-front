import React, { createContext, useReducer } from 'react';
import { GlobalReducer } from './GlobalReducer';

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()



const initialState = {
	isLoggedIn: false,
  userInfo:{}
}


const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState)

	const setUserInfo = payload => {
		dispatch({ type: 'SET_USER_INFO', payload })
	}

	const setIsLoggedIn = payload => {
		dispatch({ type: 'SET_ISLOGGED_IN', payload })
	}

	const actions = {
		setIsLoggedIn,
		setUserInfo
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