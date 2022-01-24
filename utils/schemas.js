import { FetchGraphQL } from "utils/Fetching";

export const BodyStaticAPP = [
  {
    title: "Empresas",
    children: [
      {
        title: "Empresas",
        route: "business",
        getData: FetchGraphQL.business.getBusinessAll,
        getByID: FetchGraphQL.business.getBusinessByID,
        createEntry: FetchGraphQL.catBusiness.createCategoryBusiness,
        updateEntry: {},
        deleteEntry: FetchGraphQL.catBusiness.deleteCategoryBusiness,
        visibleColumns: ["_id", "businessName", "slug", "createdAt"],
        schema: [
          {
            Header: "Nombre de empresa",
            accessor: "businessName",
            type: "string",
          },
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Usuario UID",
            accessor: "userUid",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },

          {
            Header: "Tags",
            accessor: "tags",
            type: "string",
          },
          {
            Header: "Nombre de contacto",
            accessor: "contactName",
            type: "string",
          },
          {
            Header: "Email de contacto",
            accessor: "contactEmail",
            type: "email",
          },
          {
            Header: "Pagina web",
            accessor: "webPage",
            type: "url",
          },
          {
            Header: "Telefono fijo",
            accessor: "landline",
            type: "string",
          },
          {
            Header: "Telefono movil",
            accessor: "mobilePhone",
          },
          {
            Header: "Whatsapp",
            accessor: "whatsapp",
          },
          {
            Header: "Twitter",
            accessor: "twitter",
          },
          {
            Header: "Facebook",
            accessor: "facebook",
          },
          {
            Header: "Linkedin",
            accessor: "linkedin",
          },
          {
            Header: "Youtube",
            accessor: "youtube",
          },
          {
            Header: "Instagram",
            accessor: "instagram",
          },
          {
            Header: "País",
            accessor: "country",
          },
          {
            Header: "Ciudad",
            accessor: "city",
          },
          {
            Header: "Codigo Postal",
            accessor: "zip",
          },
          {
            Header: "Direccion",
            accessor: "address",
          },
          {
            Header: "Fase",
            accessor: "fase",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
          },
          {
            Header: "Actualizado el",
            accessor: "updatedAt",
          },
        ],
      },
      {
        title: "Categorias",
        route: "categoryBusiness",
        getData: FetchGraphQL.catBusiness.getCategoryBusiness,
        getByID: FetchGraphQL.catBusiness.getOneCategoryBusiness,
        createEntry: FetchGraphQL.catBusiness.createCategoryBusiness,
        deleteEntry: FetchGraphQL.catBusiness.deleteCategoryBusiness,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            type: "date",
          },
        ],
      },
      {
        title: "Sub categorias",
        route: "subcategoriesBusiness",
        getData: FetchGraphQL.subCatBusiness.getSubCategoryBusiness,
        getByID: FetchGraphQL.subCatBusiness.getOneSubCategoryBusiness,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            type: "date",
          },
        ],
      },
      {
        title: "Caracteristicas",
        route: "characteristics",
        getData: FetchGraphQL.characteristics.getAllCharacteristics,
        getByID: FetchGraphQL.characteristics.getOneCharacteristics,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            type: "date",
          },
        ],
      },
      {
        title: "Preguntas frecuentes",
        route: "questions",
        getData: FetchGraphQL.questions.getAllQuestions,
        getByID: FetchGraphQL.questions.getOneQuestion,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            type: "date",
          },
        ],
      },
    ],
  },
  {
    title: "Blog",
    children: [
      {
        title: "Posts",
        route: "posts",
        getData: FetchGraphQL.posts.getAllPost,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "ID",
            accessor: "_id",
          },
        ],
      },
      {
        title: "Categorias",
        route: "categoriesPosts",
        getData: FetchGraphQL.categoryPost.getAllCategoryPost,
        getByID: FetchGraphQL.categoryPost.getOneCategoryPost,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "ID",
            accessor: "_id",
          },
        ],
      },
      {
        title: "Sub Categorias",
        route: "subcategoriesPost",
        getData: FetchGraphQL.subCategoryPost.getAllSubCategoryPost,
        getByID: FetchGraphQL.subCategoryPost.getOneSubCategoryPost,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
          },
          {
            Header: "ID",
            accessor: "_id",
          },
        ],
      },
    ],
  },
];
