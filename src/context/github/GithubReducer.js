const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                // Get Everything currently in the state + the payload sent
                ...state,
                users: action.payload,
                loading: false,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case 'GET_REPOS':
            return {
                ...state, 
                repos: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state
    }
}

export default githubReducer