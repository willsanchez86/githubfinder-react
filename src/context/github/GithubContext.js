import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    // Takes in 2 arguments: reducer being used, and initial state
    const [state, dispatch] = useReducer(githubReducer, initialState);

    

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

    // Get User Repos
    const getUserRepos = async (login) => {
        setLoading();
        
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        });

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        
        const data = await response.json();

        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }

    // Clear Users
    const clearUsers = () => dispatch({type: 'CLEAR_USERS'});

    // Set Loading
    const setLoading = () => dispatch({type: 'SET_LOADING'});

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        getUser,
        clearUsers,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext