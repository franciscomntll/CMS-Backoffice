import { Button, useToast, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "components/formularios/Inputs/InputField";
import {InputNumberField} from "components/formularios/Inputs/InputNumberField";
import {TextareaField} from "components/formularios/Inputs/TextareaField";
import {UploadImage} from "components/formularios/Inputs/UploadImage";
import { FindOption } from "components/Datatable/Columns";
const CKEditorComponent = dynamic(() => import("components/formularios/Inputs/CKEditor").then(mod => mod.CKEditorComponent),{ssr: false});
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export const FormDinamical = ({ schema, initialData }) => {
  const toast = useToast();
  const [selected, useSelected] = useState();
  

  useEffect(() => {
    useSelected(FindOption(schema))
  }, [schema]);
  
  const initialValues = selected?.schema?.reduce(
    (acc, { accessor }) => {
      acc[accessor] = "";
      return acc;
    },
    {}
  );

  const handleSubmit = async (values) => {
    console.log(values);
    
  };
  return (
    <>
    {initialValues && (
      <Formik onSubmit={handleSubmit} initialValues={{...initialValues, ...initialData}}>
      <Form>
        <Grid templateColumns="repeat(2, 1fr)" gap={"2rem"}>
          {selected &&
            selected?.schema?.map((item, idx) => {
              switch (item.type) {
                case "string":
                  return (
                    <InputField
                      key={idx}
                      name={item.accessor}
                      label={item.Header}
                    />
                  );
                  break;
                case "number":
                  return (
                    <InputNumberField
                      key={idx}
                      name={item.accessor}
                      label={item.Header}
                    />
                  );
                  break;
                case "textarea":
                  return (
                    <TextareaField
                      key={idx}
                      name={item.accessor}
                      label={item.Header}
                    />
                  );
                  break;
                case "ckeditor":
                  return (
                    <GridItem key={idx} colSpan={"2"}>
                      <CKEditorComponent
                        name={item.accessor}
                        label={item.Header}
                      />
                    </GridItem>
                  );
                  break;
                case "image":
                  return (
                    <UploadImage
                      key={idx}
                      name={item.accessor}
                      label={item.Header}
                    />
                  );
                  break;
                default:
                  break;
              }
            })}
        </Grid>
        <Button type={"submit"} w={"100%"} mt={"2rem"}>
          Enviar datos
        </Button>
      </Form>
    </Formik>
    ) }
    </>
  );
};
