import { FetchGraphQL } from "../utils/Fetching";
import { formatTime } from "../utils/formatTime";
import { PermisosIcon, CampañasIcon,MetricasSociales, MarcasEmIcon, InicioIcon,PreguntasFrecuentes, ChatIcon, CategoriasIcon, SubCategoriaIcon, CaracteristicasIcon, PostIcon, Secciones2Icon} from "../components/Icons/index";

export const BodyStaticAPP = [
  {
    title: "Empresas",
    children: [
      {
        icon:<InicioIcon className=""/>,
        title: "Inicio",
        route: "/",        
      },
      {
        icon:<MarcasEmIcon className="h-6 w-6"/>,
        title: "Marcas",
        route: "business",
        getData: FetchGraphQL.business.getBusinessAll,
        getByID: FetchGraphQL.business.getOneBusiness,
        createEntry: FetchGraphQL.business.createBusiness,
        updateEntry: FetchGraphQL.business.updateBusiness,
        deleteEntry: FetchGraphQL.business.deleteBusiness,
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
            type: "slug",

          },
          {
            Header: "¿Publicar?",
            accessor: "status",
            type: "switch",
          },
          {
            Header: "Pagina web",
            accessor: "webPage",
            type: "url",
          },
          {
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
          },
          {
            Header: "Logotipo",
            accessor: "imgLogo",
            type: "image",
          },
          {
            Header: "Carrusel de imagenes",
            accessor: "imgCarrusel",
            type: "imageMultiple",
          },
          {
            Header: "Contenido",
            accessor: "content",
            type: "ckeditor",
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
            Header: "Elegir categorias",
            accessor: "subCategories",
            type: "questions",
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
            Header: "Telefono fijo",
            accessor: "landline",
            type: "string",
          },
          {
            Header: "Telefono movil",
            accessor: "mobilePhone",
            type: "string",
          },
          {
            Header: "Whatsapp",
            accessor: "whatsapp",
            type: "string",
          },
          {
            Header: "Twitter",
            accessor: "twitter",
            type: "url",
          },
          {
            Header: "Facebook",
            accessor: "facebook",
            type: "url",
          },
          {
            Header: "Linkedin",
            accessor: "linkedin",
            type: "url",
          },
          {
            Header: "Youtube",
            accessor: "youtube",
            type: "url",
          },
          {
            Header: "Instagram",
            accessor: "instagram",
            type: "url",
          },
          {
            Header: "País",//
            accessor: "country",
            type: "country",
          },
          {
            Header: "Ciudad",//
            accessor: "city",
            type: "string",
          },
          {
            Header: "Codigo Postal",
            accessor: "zip",
            type: "number",
          },
          {
            Header: "Direccion",//
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
          {
            Header: "Ubicacion exacta",
            accessor: "coordinates",
            type: "maps"
          },

        ],
      },
      {
        icon: <CategoriasIcon/>,
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
            typeFile: "svg"
          },
          {
            Header: "Sub Categorias",
            accessor: "subCategories",
            type: "relationship",
            tabList: FetchGraphQL.subCatBusiness.getSubCategoryBusiness,
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
        icon: <SubCategoriaIcon className="h-6 w-6"/>,
        title: "Sub Categorias",
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
            Header: "Encabezado H1",
            accessor: "heading",
            type: "string",
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
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
          },
          {
            Header: "Imagen Banner",
            accessor: "imgBanner",
            type: "image",
          },
          {
            Header: "Icono",
            accessor: "icon",
            type: "image",
            typeFile: "svg"
          },
          {
            Header: "Descripcion",
            accessor: "description",
            type: "textarea",
            required: true,
          },
          {
            Header: "Caracteristicas",
            accessor: "characteristics",
            type: "relationship",
            tabList: FetchGraphQL.characteristics.getAllCharacteristics,
            required: true,
          },
          {
            Header: "Preguntas Frecuentes",
            accessor: "questions",
            type: "relationship",
            tabList: FetchGraphQL.questions.getAllQuestions,
            required: true,
          },
        ],
      },
      {
        icon: <CaracteristicasIcon/>,
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
            Header: "Icono",
            accessor: "icon",
            type: "image",
          },
          {
            Header: "Elementos",
            accessor: "items",
            type: "fieldArray",
            schema: "object"
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        icon:<CampañasIcon/>,
        title: "Campañas",
        route: "page404",
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
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        icon:<PreguntasFrecuentes/>,
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
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        icon:<MetricasSociales className=""/>,
        title: "Metricas Sociales",
        route: "page404",        
      },
    ],
  },
  {
    title: "Blog",
    children: [
      {
        icon: <PostIcon/>,
        title: "Posts",
        route: "posts",
        getData: FetchGraphQL.posts.getAllPost,
        getByID: FetchGraphQL.posts.getOnePost,
        createEntry: FetchGraphQL.posts.createPost,
        deleteEntry: FetchGraphQL.posts.deletePost,
        updateEntry: FetchGraphQL.posts.updatePost,
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
            Header: "Subtitulo",
            accessor: "subTitle",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Contenido",
            accessor: "content",
            type: "ckeditor",
            required: true,
          },

          {
            Header: "SEO Descripción",
            accessor: "seoDescription",
            type: "string",
            required: true,
          },

          {
            Header: "Categorias",
            accessor: "subCategories",
            type: "relationship",
            tabList: FetchGraphQL.subCategoryPost.getAllSubCategoryPost,
          },
          {
            Header: "Etiquetas",
            accessor: "tags",
            type: "fieldArray",
            schema: "string"
          },
          {
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
          },
          {
            Header: "Carrusel de imagenes",
            accessor: "imgCarrusel",
            type: "imageMultiple",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Vistas",
            accessor: "views",
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
          {
            Header: "Creado el",
            accessor: "updatedAt",
            Cell: (props) => formatTime(props.value, "es"),
          },

        ],
      },
      {
        icon: <CategoriasIcon/>,
        title: "Categorias",
        route: "categoriesPosts",
        getData: FetchGraphQL.categoryPost.getAllCategoryPost,
        getByID: FetchGraphQL.categoryPost.getOneCategoryPost,
        createEntry: FetchGraphQL.categoryPost.createCategoryPost,
        updateEntry: FetchGraphQL.categoryPost.updateCategoryPost,
        deleteEntry: FetchGraphQL.categoryPost.deleteCategoryPost,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "Identificador",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
            required: true,
          },
          {
            Header: "Encabezado",
            accessor: "heading",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
          },
          {
            Header: "Imagen Banner",
            accessor: "imgBanner",
            type: "image",
          },
          {
            Header: "Icon",
            accessor: "icon",
            type: "image",
          },
          {
            Header: "Sub Categorias",
            accessor: "subCategories",
            type: "relationship",
            tabList: FetchGraphQL.subCategoryPost.getAllSubCategoryPost,
          },
          {
            Header: "Creado el",
            accessor: "createdAt",
            Cell: (props) => formatTime(props.value, "es"),
          },
        ],
      },
      {
        icon: <SubCategoriaIcon/>,
        title: "Sub Categorias",
        route: "subcategoriesPost",
        getData: FetchGraphQL.subCategoryPost.getAllSubCategoryPost,
        getByID: FetchGraphQL.subCategoryPost.getOneSubCategoryPost,
        createEntry: FetchGraphQL.subCategoryPost.createSubCategoryPost,
        updateEntry: FetchGraphQL.subCategoryPost.updateSubCategoryPost,
        deleteEntry: FetchGraphQL.subCategoryPost.deleteSubCategoryPost,
        visibleColumns: ["_id", "title", "slug", "createdAt"],
        schema: [
          {
            Header: "Identificador",
            accessor: "_id",
          },
          {
            Header: "Titulo",
            accessor: "title",
            type: "string",
            required: true,
          },
          {
            Header: "Encabezado",
            accessor: "heading",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
            required: true,
          },
          {
            Header: "Imagen Miniatura",
            accessor: "imgMiniatura",
            type: "image",
          },
          {
            Header: "Imagen Banner",
            accessor: "imgBanner",
            type: "image",
          },
          {
            Header: "Icon",
            accessor: "icon",
            type: "image",
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
    title: "Paginas",
    children: [
      {
        icon: <Secciones2Icon/>,
        title: "Secciones",
        route: "sections",
        getData: FetchGraphQL.sections.getAllPage,
        getByID: FetchGraphQL.sections.getOnePage,
        createEntry: FetchGraphQL.sections.createPage,
        deleteEntry: FetchGraphQL.sections.deletePage,
        updateEntry: FetchGraphQL.sections.updatePage,
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
            Header: "Subtitulo",
            accessor: "subTitle",
            type: "string",
          },
          {
            Header: "Slug",
            accessor: "slug",
            type: "string",
          },
          {
            Header: "estatus",
            accessor: "status",
            type: "switch",
          },
          {
            Header: "Contenido",
            accessor: "content",
            type: "ckeditor",
          },

        ],
      },
    ]
  },
  {
    title:"Configuracion",
    children:[
      {
        icon:<PermisosIcon/>,
        title:"Permisos",
        route:"page404"
      }
    ]
  }
];
