import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    };

    // Takes in 2 arguments: reducer being used, and initial state
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get search results
    const fetchUsers = async (text) => {
        setLoading();
        
        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}+in%3Alogin&type=Users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        
        const data = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: data.items
        })
    }

    // Get single user
    const getUser = async (login) => {
        setLoading();
        
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        
        if(response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json();

            dispatch({
                type: 'GET_USER',
                payload: data
            });
        }
    }


    // Clear Users
    const clearUsers = () => dispatch({type: 'CLEAR_USERS'});

    // Set Loading
    const setLoading = () => dispatch({type: 'SET_LOADING'});

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        fetchUsers,
        getUser,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext