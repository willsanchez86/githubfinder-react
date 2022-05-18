const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                // Get Everything currently in the state + the payload sent
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export default githubReducer