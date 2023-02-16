import { BodyStaticAPP } from "../../utils/schemas";
import { ActionsCell } from "../../components/Datatable/ActionsCell";
import MenuFilter from "../MenuFilter";

export const FindOption = (slug) => {
   //Unificar hijos a un mismo nivel | Sustraer de grupos
   const children = BodyStaticAPP.reduce((acc, item) => {
    acc = [...acc, ...item.children ,item]
    return acc
  },[])
   
  //Seleccionar de acuerdo al slug


  const options = children.find(item => item.route === slug)

  return options
}

 

export const columnsDataTable = ({ slug }) => {
  
  const options = FindOption(slug)

 //console.log("options",options)

  // Verificar si la seleccion no es nula
    if(options){
      
      //Columna de acciones (Ver, editar, borrar)
   /*     const actions = {
            Header: "null",
            accessor: "",
            
            Cell: (args) => <ActionsCell {...args} />,
          }
          
          //Validar si ya no se agrego antes de hacer el push
          options.schema.findIndex(item => item.Header === "Acciones") === -1 && options.schema.push(actions)  */

      // Construir hiddenColumns a partir de definir los que sí quiero ver
      options.hiddenColumns = options?.schema?.reduce((acc, item) => {
        !options?.visibleColumns?.includes(item?.accessor) &&
          acc?.push(item?.accessor);
        return acc;
      }, []);
    
      return options;

    }else {
        return null
    }
};
