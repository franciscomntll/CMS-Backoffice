import { FetchGraphQL } from "utils/Fetching";
import { formatTime } from "utils/formatTime";

export const BodyStaticAPP = [
  {
    title: "Empresas",
    children: [
      {
        title: "Empresas",
        route: "business",
        getData: FetchGraphQL.business.getBusinessAll,
        getByID: FetchGraphQL.business.getBusinessByID,
        createEntry: FetchGraphQL.catBusiness.createCategoryBusiness, //pendiente por cambiar
        updateEntry: {}, //pendiente
        deleteEntry: FetchGraphQL.catBusiness.deleteCategoryBusiness, //pendiente por cambiar
        visibleColumns: ["_id", "businessName", "slug", "createdAt"],
        schema: [
          {
            Header: "Nombre de empresa",
            accessor: "businessName",
            type: "string",
            required: true,
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Pagina web",
            accessor: "webPage",
            type: "url",
            required: true,
          },
          {
            Header: "Imagen Banner",
            accessor: "imgBanner",
            type: "image",
            required: true,
          },
          {
            Header: "Contenido",
            accessor: "content",
            type: "ckeditor",
            required: true,
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
            Header: "Tags",
            accessor: "tags",
            type: "string",
            required: true,
          },
          {
            Header: "Nombre de contacto",
            accessor: "contactName",
            type: "string",
            required: true,
          },
          {
            Header: "Email de contacto",
            accessor: "contactEmail",
            type: "email",
            required: true,
          },
          
          {
            Header: "Telefono fijo",
            accessor: "landline",
            type: "string",
            required: true,
          },
          {
            Header: "Telefono movil",
            accessor: "mobilePhone",
            type: "number",
            required: true
          },
          {
            Header: "Whatsapp",
            accessor: "whatsapp",
            type: "number",
          },
          {
            Header: "Twitter",
            accessor: "twitter",
            type: "string",
          },
          {
            Header: "Facebook",
            accessor: "facebook",
            type: "string",
          },
          {
            Header: "Linkedin",
            accessor: "linkedin",
            type: "string",
          },
          {
            Header: "Youtube",
            accessor: "youtube",
            type: "string",
          },
          {
            Header: "Instagram",
            accessor: "instagram",
            type: "string",
          },
          {
            Header: "País",
            accessor: "country",
            type: "country",
          },
          {
            Header: "Ciudad",
            accessor: "city",
            type: "string",
          },
          {
            Header: "Codigo Postal",
            accessor: "zip",
            type: "number",
          },
          {
            Header: "Direccion",
            accessor: "address",
            type: "string",
          },
          {
            Header: "Fase",
            accessor: "fase",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
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
        updateEntry: FetchGraphQL.catBusiness.updateCategoryBusiness,
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
            required: true,
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Imagen Banner",
            accessor: "imgBanner",
            type: "image",
            required: true,
          },
          {
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
            required: true,
          },
          {
            Header: "Icono",
            accessor: "icon",
            type: "image",
            required: true,
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        title: "Sub categorias",
        route: "subcategoriesBusiness",
        getData: FetchGraphQL.subCatBusiness.getSubCategoryBusiness,
        getByID: FetchGraphQL.subCatBusiness.getOneSubCategoryBusiness,
        createEntry: FetchGraphQL.subCatBusiness.createSubCategoryBusiness,
        deleteEntry: FetchGraphQL.subCatBusiness.deleteSubCategoryBusiness,
        updateEntry: FetchGraphQL.subCatBusiness.updateSubCategoryBusiness,
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
            required: true,
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
          {
            Header: "Descripcion",
            accessor: "description",
            type: "textarea",
            required: true
          },
        ],
      },
      {
        title: "Caracteristicas",
        route: "characteristics",
        getData: FetchGraphQL.characteristics.getAllCharacteristics,
        getByID: FetchGraphQL.characteristics.getOneCharacteristics,
        createEntry: FetchGraphQL.characteristics.createCharacteristics,
        deleteEntry: FetchGraphQL.characteristics.deleteCharacteristics,
        updateEntry: FetchGraphQL.characteristics.updateCharacteristics,
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
            required: true,
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        title: "Preguntas frecuentes",
        route: "questions",
        getData: FetchGraphQL.questions.getAllQuestions,
        getByID: FetchGraphQL.questions.getOneQuestion,
        createEntry: FetchGraphQL.questions.createQuestions,
        deleteEntry: FetchGraphQL.questions.deleteQuestions,
        updateEntry: FetchGraphQL.questions.updateQuestions,
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
            required: true,
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
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
            required: true,
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
            required: true,
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
            required: true,
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
