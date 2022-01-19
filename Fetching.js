import { api } from "./api"

export const FetchGraphQL = {
    getBusinessAll : async () => {
        const query = `query {
            getAllBusinesses{
                total
              results{
                _id
                businessName
              }
            }
          }`

        const variables = {}
        const { data : {data : { getAllBusinesses }} } = await api.GraphQL({query, variables})
        return getAllBusinesses
    }
}