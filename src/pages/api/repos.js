import { getListReposFromGitHub } from '../../request'

const getAllRepo = async (_, res) => {
    try {
        const response = await getListReposFromGitHub()
        res.status(200).json(response?.data)
    } catch (err) {
        res.status(err?.response?.status).json(err?.response)
    }
}

export default getAllRepo