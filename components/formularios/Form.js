import { Button, useToast, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "components/formularios/Inputs/InputField";
import { InputNumberField } from "components/formularios/Inputs/InputNumberField";
import { TextareaField } from "components/formularios/Inputs/TextareaField";
import { UploadImage } from "components/formularios/Inputs/UploadImage";
const CKEditorComponent = dynamic(
  () =>
    import("components/formularios/Inputs/CKEditor").then(
      (mod) => mod.CKEditorComponent
    ),
  { ssr: false }
);
import dynamic from "next/dynamic";
import { PasswordInput } from "components/formularios/Inputs/PasswordInput";
import { useEffect, useState } from "react";
import { URLInputField } from "components/formularios/Inputs/URLInputField";
import * as Yup from "yup";
export const FormDinamical = ({
  schema: state,
  initialValues,
  columns = 2,
  onSubmit,
}) => {
  const [schema, setSchema] = useState(null);

  const initialValuesCreated = schema?.reduce((acc, { accessor }) => {
    acc[accessor] = "";
    return acc;
  }, {});

  const ValidationOptions = {
    string: Yup.string(),
  };

  const dynamicalValidationSchema = schema?.reduce((acc, field) => {
    if (ValidationOptions[field.type]) {
      if (field.required) {
        acc[field.accessor] = ValidationOptions[field.type].required();
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
                        <GridItem key={idx} colSpan={"2"}>
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
