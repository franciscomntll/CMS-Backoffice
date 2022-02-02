// const types = {
//   business : ["_id", "userUid", "slug", "tags", "contactName", "contactEmail", "businessName", "webPage", "landline", "mobilePhone", "whatsapp", "twitter", "facebook", "linkedin", "youtube", "instagram", "country", "city", "zip", "address", "description", "content", "coordinates", "categories", "groupSubCategories", "subCategories", "questionsAndAnswers{frequentQuestions answers}", "photos{_id }", "imgMiniatura", "imgLogo", "fase", "status", "createdAt", "updatedAt"],
//   categoryBusiness: ["_id", "title", "heading", "slug", "description", "imgMiniatura{ _id }", "imgBanner{ _id }", "icon{ _id }", "createdAt", "updatedAt", "subCategories{ _id }"]
// }

// export const schemaQuery = (type) => {
//   if(types[type]){
//     const json = JSON.stringify(types[type])
//     const replaced = json.replace(/("|\[|\])/g, "").replace(/,/g, " ")
//     return replaced
//   }
// }

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
          content
          imgMiniatura{
            _id
            smallUrl
          }
    }
      }`,
    },
    
    // @READ Buscar según ID
    getBusinessByID: {
      query: `query ($id: ID) {
        getBussines(id: $id){
          _id
          userUid
          slug
          businessName
          content
          imgMiniatura{
            _id
            smallUrl
          }
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
          imgMiniatura{
            _id
            i1024
            i800
            i640
            i320
          }
          imgBanner{
            _id
            i1024
            i800
            i640
            i320
          }
          icon{
            _id
            i1024
            i800
            i640
            i320
          }
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
        $imgBanner : Upload
        $imgMiniatura : Upload
        $icon : Upload
      ) {
        createCategoryBusiness(args: {
          title: $title,
          heading: $heading,
          slug: $slug,
          description: $description,
          subCategories: $subCategories,
          imgBanner : $imgBanner
          imgMiniatura : $imgMiniatura
          icon : $icon
        }){
          _id
          title
        }
      }`,
    },

    // @DELETE Eliminar categoria
    deleteCategoryBusiness: {
      query: `mutation ($id: [ID]) {
        deleteCategoryBusiness(_id: $id)
      }`,
    },

    // @UPDATE Actualizar categoria
    updateCategoryBusiness: {
      query: `mutation ($id : ID, $args : inputCategoryBusiness) {
        updateCategoryBusiness(_id: $id, args: $args){
          _id
          title
          heading
          slug
          description
          createdAt
          updatedAt
          subCategories{
            _id
          }
        }
      }`,
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
          imgMiniatura{
            _id
            i1024
            i800
            i640
            i320
            createdAt
          }
          imgBanner{
            _id
            i1024
            i800
            i640
            i320
            createdAt
          }
          icon{
            _id
            i1024
            i800
            i640
            i320
            createdAt
          }
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

    //@CREATE Crear sub Categoria
    createSubCategoryBusiness: {
      //done
      query: `mutation (
        $title: String,
        $heading :String,
        $slug: String,
        $description: String,
      ) {
        createSubCategoryBusiness(args: {
          title: $title,
          heading: $heading,
          slug: $slug,
          description: $description,
        }){
          _id
          title
          heading
          slug
          description
        }
      }`,
    },

    //@DELETE eliminar sub categoria
    deleteSubCategoryBusiness: {
      query: `mutation ($id: [ID]) {
        deleteSubCategoryBusiness(_id: $id)
      }`,
    },

    // @UPDATE Actualizar sub categoria
    updateSubCategoryBusiness: {
      query: `mutation ($id : ID, $args : inputSubCategoryBusiness) {
        updateSubCategoryBusiness(_id: $id, args: $args){
          _id
          title
          questions{
            _id
          }
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
            icon{
              _id
            }
            items{
              _id
              title
              createdAt
              updatedAt
              icon{
                _id
              }
            }
          }
        }
      }`,
      variables: {},
    },

    // @READ Buscar caracteristica segun ID
    getOneCharacteristics: {
      query: `query ($id: ID) {
        getOneCharacteristics(_idCharacteristics:$id){
            _id
            title
            icon{
              _id
            }
            items{
              title
            }
          }
      }`,
    },

    //@CREATE create caracteristicas
    createCharacteristics: {
      query: `mutation ($title: String, $icon : Upload, $items : [inputCharacteristicsItems] ){
        createCharacteristics(args:{title: $title, icon : $icon, items: $items  }){
          _id
        }
      }`,
    },

    //@DELETE eliminar caracteristica
    deleteCharacteristics: {
      //revisar
      query: `mutation ($id: [ID]) {
        deleteCharacteristics(_idCharacteristic: $id)
      }`,
    },
    updateCharacteristics: {
      query: `mutation ($id :ID, $args : inputCharacteristics) {
        updateCharacteristics(_id: $id, args: $args){
          _id
          title
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

    //@CREATE Create question
    createQuestions: {
      //revisar... error por no aceptar null
      query: `mutation (
        $title: String,
        ){
        createQuestions(title: $title){
          _id
          title
        }
      }`,
    },

    //@DELETE borrar questions
    deleteQuestions: {
      //revisar
      query: `mutation ($id: [ID]) {
        deleteQuestions(_idQuestions: $id)
      }`,
    },

    //@UPDATE Actualizar pregunta
    updateQuestions: {
      query: `mutation ($id:ID!, $args : inputQuestions){
        updateQuestions(_id: $id, args :$args){
          _id
          title
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
      query: `query{
        getAllPost{
          total
          results{
            _id
            title
            subTitle
            slug
            createdAt
            updatedAt
            status
            views
          }
        }
      }`
    },

    // @READ Buscar post por ID
    getOnePost : {
      query : `query ($id:ID){
        getOnePost(_id: $id){
            _id
            title
            subTitle
            content
            slug
            seoDescription
            subCategories
            tags
            authorUsername
            imgCarrusel{
              _id
              i1024
              i800
              i640
              i320
            }
            imgMiniatura{
              _id
              i1024
              i800
              i640
              i320
            }
            createdAt
            updatedAt
            status
            views
        }
      }`
    },

    // @CREATE Crear post
    createPost : {
      query : `mutation (
        $title: String,
        $subTitle :String,
        $content: String,
        $slug : String,
        $seoDescription : String,
        $subCategories: [ID],
        $tags :[String],
        $authorUsername :String,
        $imgCarrusel : [Upload],
        $imgMiniatura : Upload
      ){
        createPost (args:{
          title: $title,
          subTitle:$subTitle,
          content: $content,
          slug:$slug,
          seoDescription: $seoDescription,
          subCategories :$subCategories,
          tags: $tags,
          authorUsername :$authorUsername,
          imgCarrusel: $imgCarrusel,
          imgMiniatura : $imgMiniatura,
        }){
          _id
        }
      }`
    },

    // @DELETE Eliminar post
    deletePost : {
      query : `mutation ($id :[ID]){
        deletePost(_id: $id)
      }`
    }
  },

  //ENDPOINTS DE CATEGORIAS DE POSTS
  categoryPost: {
    // @READ Buscar todas las categorias
    getAllCategoryPost: {
      query: `query{
        getCategoryPost{
          total
          results{
            _id
            title
            heading
            slug
            description
            createdAt
            updatedAt
          }
        }
      }`,
    },

    // @READ Buscar categoria segun ID
    getOneCategoryPost: {
      query: `query ($id :ID){
        getOneCategoryPost(_id: $id){
          _id
          title
          heading
          slug
          description
          imgMiniatura{
            _id
            i1024
            i800
            i640
            i320
          }
          imgBanner{
            _id
            i1024
            i800
            i640
            i320
          }
          icon{
            _id
            i1024
            i800
            i640
            i320
          }
          subCategories{
            _id
          }
        }
      }`,
    },

    //@CREATE Crear categoria
    createCategoryPost : {
      query :`mutation ($title:String, $heading: String, $slug : String, $description: String, $imgMiniatura : Upload, $imgBanner :Upload, $icon: Upload, $subCategories: [ID] ) {
        createCategoryPost(args: {
          title: $title,
          heading: $heading,
          slug: $slug,
          description: $description,
          imgMiniatura: $imgMiniatura,
          imgBanner: $imgBanner,
          icon: $icon,
          subCategories: $subCategories
        }){
          _id
        }
      }`
    },

    updateCategoryPost : {
      query : `mutation ($id :ID, $args: inputCategoryPost ) {
        updateCategoryPost(_id: $id, args: $args){
          _id
        }
      }`
    },
    deleteCategoryPost: {
      query : `mutation ($id : [ID]) {
        deleteCategoryPost(_id: $id)
      }`
    }
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
            createdAt
            updatedAt
          }
        }
      }`,
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
            imgMiniatura{
              _id
              i1024
              i800
              i640
              i320
            }
            imgBanner{
              _id
              i1024
              i800
              i640
              i320
            }
            icon{
              _id
              i1024
              i800
              i640
              i320
            }
            createdAt
            updatedAt
        }
      }`,
    },

    // @CREATE Crear subcategoria
    createSubCategoryPost : {
      query : `mutation ($title :String, $heading :String, $slug:String, $description: String, $imgMiniatura: Upload, $imgBanner :Upload, $icon :Upload ){
        createSubCategoryPost(args:{
          title :$title,
          heading: $heading,
          slug: $slug,
          description: $description,
          imgMiniatura : $imgMiniatura,
          imgBanner : $imgBanner,
          icon : $icon
        }){
          _id
        }
      }`
    },

    //@UPDATE Actualizar subcategoria
    updateSubCategoryPost : {
      query : `mutation ($id: ID, $args :inputSubCategoryPost ){
        updateSubCategoryPost(_id: $id, args: $args){
          _id
        }
      }`
    },
    deleteSubCategoryPost : {
      query : `mutation ($id:[ID]) {
        deleteSubCategoryPost(_id: $id)
      }`
    },
  },
};
