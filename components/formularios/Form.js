import { Button, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "components/formularios/Inputs/InputField";
import { InputNumberField } from "components/formularios/Inputs/InputNumberField";
import { TextareaField } from "components/formularios/Inputs/TextareaField";
import { UploadImage } from "components/formularios/Inputs/UploadImage";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic( () => import("components/formularios/Inputs/CKEditor").then(mod => mod.CKEditorComponent), {ssr: false});
import { PasswordInput } from "components/formularios/Inputs/PasswordInput";
import { useEffect, useState } from "react";
import { URLInputField } from "components/formularios/Inputs/URLInputField";
import {CounstriesSelectField} from 'components/formularios/Inputs/CountriesSelectField'
import * as Yup from "yup";
import Relationship from "components/formularios/Inputs/Relationship";
import { useFetch } from "hooks/useFetch";
import { FieldArrayField } from "components/formularios/Inputs/FieldArrayField";
export const FormDinamical = ({
  schema: state,
  initialValues,
  columns = 2,
  onSubmit,
}) => {
  const [schema, setSchema] = useState(null);

  const initialValuesCreated = schema?.reduce((acc, { type, accessor }) => {
    switch (type) {
      case "string":
        acc[accessor] = "";
        break;
      case "email":
        acc[accessor] = "";
        break;
      case "country":
        acc[accessor] = "";
        break;
    
      default:
       
        break;
    }
    return acc;
  }, {});

  const ValidationOptions = {
    string: Yup.string().nullable(),
  };

  const dynamicalValidationSchema = schema?.reduce((acc, field) => {
    if (ValidationOptions[field.type]) {
      if (field.required) {
        acc[field.accessor] = ValidationOptions[field.type].required(`${field.Header ?? "Campo"} requerido`);
      } else {
        acc[field.accessor] = ValidationOptions[field.type];
      }
    }

    return acc;
  }, {});

  const validationSchema = Yup.object().shape(dynamicalValidationSchema);

  useEffect(() => {
    setSchema(state);
  }, [state]);

  return (
    <>
      {initialValuesCreated && (
        <Formik
          onSubmit={onSubmit}
          initialValues={{ ...initialValuesCreated, ...initialValues }}
          validationSchema={validationSchema}
        >
          <Form>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={"2rem"}>
              {schema &&
                schema?.map((item, idx) => {
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
                    case "email":
                      return (
                        <InputField
                          key={idx}
                          name={item.accessor}
                          label={item.Header}
                          type={"email"}
                        />
                      );
                      break;
                    case "password":
                      return (
                        <PasswordInput
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
                        <GridItem key={idx} colSpan={columns} fontSize={"sm"} >
                          <CKEditorComponent
                            name={item.accessor}
                            label={item.Header}
                          />
                        </GridItem>
                      );
                      break;
                    case "url":
                      return (
                        <URLInputField
                          key={idx}
                          name={item.accessor}
                          label={item.Header}
                        />
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
                    case "relationship":
                      
                      
                      return (
                        <Relationship
                          key={idx}
                          name={item.accessor}
                          label={item.Header}
                          tabList={item.tabList}
                        />
                      );
                      break;
                    case "country":
                      return (
                        <CounstriesSelectField
                          key={idx}
                          name={item.accessor}
                          label={item.Header}
                        />
                      );
                      break;
                    case "fieldArray":
                      return (
                        <FieldArrayField
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
      )}
    </>
  );
};
