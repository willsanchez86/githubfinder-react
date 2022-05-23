const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get search results
export const fetchUsers = async (text) => {
    
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}+in%3Alogin&type=Users`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    })
    
    const data = await response.json();

    return data.items
}