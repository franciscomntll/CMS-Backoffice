import { schemasForForms } from "../../schemas";
import ActionsCell from "./ActionsCell";

export const columnsDataTable2 = ({ slug, dispatch }) => {
  const options = {
    business: {
      visibleColumns: ["_id", "businessName", "slug", "createdAt"],
      columns: [
        {
            Header: "Nombre de empresa",
            accessor: "businessName",
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
        {
          Header: "Acciones",
          accessor: "",
          Cell: (args) => <ActionsCell {...args} setAction={dispatch} />,
        },
      ],
    },
  };

  options[slug]?.hiddenColumns = options[slug]?.columns?.reduce((acc, item) => {
    !options[slug]?.visibleColumns?.includes(item?.accessor) &&
      acc?.push(item?.accessor);
    return acc;
  }, []);

  return options[slug];
};
export const columnsDataTable = ({ slug, dispatch }) => {
  
    const options = schemasForForms[slug]
    if(options){
        const actions = {
            Header: "Acciones",
            accessor: "",
            Cell: (args) => <ActionsCell {...args} setAction={dispatch} />,
          }
          
          options.schema.findIndex(item => item.Header === "Acciones") === -1 && options.schema.push(actions)
    
      options?.hiddenColumns = options?.schema?.reduce((acc, item) => {
        !options?.visibleColumns?.includes(item?.accessor) &&
          acc?.push(item?.accessor);
        return acc;
      }, []);
    
      return options;

    }else {
        return null
    }
};
