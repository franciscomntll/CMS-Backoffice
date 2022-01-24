
export const FetchGraphQL = {
  getBusinessAll: {
    query: `query {
            getAllBusinesses{
                total
              results{
                _id
                businessName
                slug
                createdAt
                updatedAt
              }
            }
          }`,

    variables: {},
  },

  getAllPost : {
    query: `query {
      getAllPost{
        total
        results{
          _id
          title
          subTitle
          permaLink
          slug
          createdAt
          updatedAt
        }
      }
        
    }`,
    variables: {}
  },
  
  getSubCategoryBusiness : {
    query: `query{
      getSubCategoryBusiness{
        total
        results{
          _id
        title
        heading
        slug
        description
        imgMiniatura
        imgBanner
        icon
        characteristics{
          _id
          title
        }
        questions{
          _id
          title
        }
        }
      }
    }`,
    variables: {}
  },
  getCategoryBusiness : {
    query : `query{
      getCategoryBusiness{
        total
        results{
          _id
        title
        heading
        slug
        description
        imgMiniatura
        imgBanner
        icon
        }
      }
    }`,
    variables:{}
  },
  getBusinessByID : {
    query : `query ($id: ID) {
      getBussines(id: $id){
        _id
    		userUid
        slug
        businessName

  }
    }`
  },
  
};
