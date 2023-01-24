import axios from "axios"
// for client side

async function getListRepo() {
    const getData = await axios.get('/api/repos/')
    const result = getData.data
    return result
}

// for server side

async function getListReposFromGitHub() {
    const getData = await axios.get('https://api.github.com/users/falconilham/repos')
    return getData
}

export { getListRepo, getListReposFromGitHub }

