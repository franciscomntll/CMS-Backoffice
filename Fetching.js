
export const FetchGraphQL = {
  getBusinessAll: {
    query: `query {
            getAllBusinesses{
                total
              results{
                _id
                businessName
              }
            }
          }`,

    variables: {},
  },
};
