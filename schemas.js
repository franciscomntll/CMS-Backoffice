export const schemasForForms = {
  business: {
    endpoint: () => console.log("hola mundo"),
    visibleColumns: ["_id", "businessName", "slug", "createdAt"],
    schema: [
      {
        Header: "Nombre de empresa",
        accessor: "businessName",
        type: "string"
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
      type: "string"
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
};
