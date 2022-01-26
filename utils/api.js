import axios from "axios"

const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_BASE_URL})

export const api = {
    GraphQL : async (data, config) => {
        return await instance.post("/graphql", data, config)
    },
    getAllCountries : async () => {
        return await axios.get('https://restcountries.com/v3.1/all')
    }
}