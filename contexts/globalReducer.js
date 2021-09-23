
export const GlobalReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER_INFO':
			return {
				...state,
				userInfo: action?.payload
			}
		case 'SET_ISLOGGED_IN':
			return {
				...state,
				isLoggedIn: action.payload
			}
		default:
			return state
	}
}