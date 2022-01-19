import axios from "axios"

const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_BASE_URL})
export const api = {
    GraphQL : async (data, config) => {
        return await instance.post("/graphql", data, config)
    }
}