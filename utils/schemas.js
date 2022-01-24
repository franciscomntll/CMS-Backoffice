import { FetchGraphQL } from "utils/Fetching";

export const BodyStaticAPP = [
  {
    title: "Empresas",
    children: [
      {
        title: "Empresas",
        route: "business",
        getData: FetchGraphQL.getBusinessAll,
        getByID: FetchGraphQL.getBusinessByID,
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
          },
          {
            Header: "Nombre de contacto",
            accessor: "contactName",
          },
          {
            Header: "Email de contacto",
            accessor: "contactEmail",
          },
          {
            Header: "Pagina web",
            accessor: "webPage",
          },
          {
            Header: "Telefono fijo",
            accessor: "landline",
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
        route: "category",
        getData: FetchGraphQL.getCategoryBusiness,
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
        getData: FetchGraphQL.getSubCategoryBusiness,
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
        getData: FetchGraphQL.getAllPost,
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
        endpoint: () => console.log("hola mundo"),
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
        getData: FetchGraphQL.getSubCategoryBusiness,
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
