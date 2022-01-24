export const FetchGraphQL = {
  //ENDPOINTS DE EMPRESAS
  business: {
    // @READ Buscar todos los listing
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

    // @READ Buscar según ID
    getBusinessByID: {
      query: `query ($id: ID) {
        getBussines(id: $id){
          _id
          userUid
          slug
          businessName
  
    }
      }`,
    },
  },
  //ENDPOINTS DE CATEGORIAS DE LISTING
  catBusiness: {
    // @READ Buscar todas las categorias
    getCategoryBusiness: {
      query: `query{
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
      variables: {},
    },

    // @READ Buscar categoria segun ID
    getOneCategoryBusiness: {
      query: `query ($id: ID){
        getOneCategoryBusiness(_id: $id){
          _id
          title
          heading
          slug
          description
          imgMiniatura
          imgBanner
          icon
          subCategories{
            _id
          }
          createdAt
          updatedAt
        }
      }`,
    },

    // @CREATE Crear nueva categoria
    createCategoryBusiness: {
      query: `mutation (
        $title: String,
        $heading :String,
        $slug: String,
        $description: String,
        $subCategories: [ID],
      ) {
        createCategoryBusiness(args: {
          title: $title,
          heading: $heading,
          slug: $slug,
          description: $description,
          subCategories: $subCategories
        }){
          _id
          title
        }
      }`,
    },

    // @DELETE Eliminar categoria
    deleteCategoryBusiness : {
      query :`mutation ($id: [ID]) {
        deleteCategoryBusiness(_id: $id)
      }`
    },
  },
  //ENDPOINTS DE SUB-CATEGORIAS DE LISTING
  subCatBusiness: {
    // @READ Buscar todos los registros
    getSubCategoryBusiness: {
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
      variables: {},
    },

    // @READ Buscar subcategoria segun ID
    getOneSubCategoryBusiness: {
      query: `query ($id: ID){
        getOneSubCategoryBusiness(_id: $id){
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
          }
          questions{
            _id
          }
          createdAt
          updatedAt
        }
      }`,
    },
  },

  //ENDPOINTS DE CARACTERISTICAS DE LISTING
  characteristics: {
    // @READ Buscar todos los registros
    getAllCharacteristics: {
      query: `query {
        getCharacteristics{
          total
          results{
            _id
            title
            icon
            items{
              _id
              title
              icon
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
        }
      }`,
      variables: {},
    },

    // @READ Buscar caracteristica segun ID
    getOneCharacteristics: {
      query: `query ($id : ID) {
        getOneCharacteristicsItems(_idCharacteristic: $id){
          _id
          title
          icon
          createdAt
          updatedAt
        }
      }`,
    },
  },

  //ENDPOINTS DE POSTS
  posts: {
    // @READ Buscar todos los posts
    getAllPost: {
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
      variables: {},
    },
  },

  //ENDPOINTS DE CATEGORIAS DE POSTS
  categoryPost: {
    // @READ Buscar todas las categorias
    getAllCategoryPost: {
      query: `query {
        getCategoryPost{
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
            subCategories{
              _id
            }
            createdAt
            updatedAt
          }
        }
      }`,
    },

    // @READ Buscar categoria segun ID
    getOneCategoryPost: {
      query: `query ($id:ID) {
        getOneCategoryPost(_id :$id){
            _id
            title
            heading
            slug
            description
            imgMiniatura
            imgBanner
            icon
            subCategories{
              _id
            }
            createdAt
            updatedAt
        }
      }`,
    },
  },

  //ENDPOINTS DE SUB-CATEGORIAS DE POSTS
  subCategoryPost: {
    // @READ Buscar todas las subcategorias
    getAllSubCategoryPost: {
      query: `query {
        getSubCategoryPost{
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
            createdAt
            updatedAt
          }
        }
      }`
    },

    // @READ Buscar subcategoria segun ID
    getOneSubCategoryPost: {
      query: `query ($id:ID) {
        getOneSubCategoryPost(_id :$id){
            _id
            title
            heading
            slug
            description
            imgMiniatura
            imgBanner
            icon
            createdAt
            updatedAt
        }
      }`,
    },
  },

  //ENDPOINTS DE PREGUNTAS FRECUENTES
  questions: {
    // @READ Buscar todas las preguntas
    getAllQuestions: {
      query: `query {
        getQuestions{
          total
          results{
            _id
            title
            createdAt
            updatedAt
          }
        }
      }`,
      variables: {},
    },

    // @READ Buscar pregunta segun ID
    getOneQuestion: {
      query: `query ($id: ID){
        getOneQuestions(_idQuestions: $id){
            _id
            title
            createdAt
            updatedAt
      
        }
      }`,
    },
  },
};
