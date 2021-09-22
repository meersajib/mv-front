
export const GlobalReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER_NAME':
			return {
				...state,
				userName: action?.payload
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