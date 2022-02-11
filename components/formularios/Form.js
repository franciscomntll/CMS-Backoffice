import { Button, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "components/formularios/Inputs/InputField";
import { InputNumberField } from "components/formularios/Inputs/InputNumberField";
import { TextareaField } from "components/formularios/Inputs/TextareaField";
import { UploadImage } from "components/formularios/Inputs/UploadImage";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic(
  () =>
    import("components/formularios/Inputs/CKEditor").then(
      (mod) => mod.CKEditorComponent
    ),
  { ssr: false }
);
import { PasswordInput } from "components/formularios/Inputs/PasswordInput";
import { forwardRef, useEffect, useState } from "react";
import { URLInputField } from "components/formularios/Inputs/URLInputField";
import { CounstriesSelectField } from "components/formularios/Inputs/CountriesSelectField";
import * as Yup from "yup";
import Relationship from "components/formularios/Inputs/Relationship";
import { FieldArrayField } from "components/formularios/Inputs/FieldArrayField";
import { MultipleImages } from "components/formularios/Inputs/MultipleImages";
import QuestionInputsForBusiness from "components/formularios/Inputs/QuestionInputsForBusiness";

export const FormDinamical = forwardRef(
  ({ schema: state, initialValues, columns, onSubmit }, ref) => {
    const [schema, setSchema] = useState(null);

    const reduceInitialValues = Object?.entries(initialValues ?? {}).reduce((acc, item) => {
      if(item[1]){
        //@ts-ignore
        acc[item[0]] = item[1]
      }
      return acc
    },{})
    
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
        case "ckeditor":
          acc[accessor] = null;
          break;
        case "image":
          acc[accessor] = null;
          break;

        default:
          if(type) acc[accessor] = undefined
          break;
          break;
      }
      return acc;
    }, {});

    const ValidationOptions = {
      ckeditor: Yup.string().nullable(),
      string: Yup.string().nullable(),
      email: Yup.string().email().nullable(),
      url: Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "URL invalida"
      ).nullable(),
      country: Yup.string().nullable(),
      number: Yup.number().nullable(),
      relationship: Yup.array().of(Yup.string()).nullable(),
      questions : Yup.array().of(Yup.object().shape({
        _id : Yup.string()
      })).nullable()
    };

    const dynamicalValidationSchema = schema?.reduce((acc, field) => {
      if (ValidationOptions[field.type]) {
        if (field.required) {
          acc[field.accessor] =
            ValidationOptions[field.type]?.required(`requerido`);
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
            initialValues={{ ...initialValuesCreated, ...reduceInitialValues }}
            validationSchema={validationSchema}
            innerRef={ref}
          >
            {({ values, setValues }) => {
              return (
                <Form>
                  <Grid templateColumns={columns} gap={"2rem"}>
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
                          case "slug":
                            return (
                              <InputField
                                key={idx}
                                name={item.accessor}
                                label={item.Header}
                                disabled={true}
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
                              <GridItem
                                key={idx}
                                colSpan={[1, , , 3]}
                                fontSize={"sm"}
                              >
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
                          case "imageMultiple":
                            return (
                              <GridItem colSpan={[1, , , 3]}>
                                <MultipleImages
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                />
                              </GridItem>
                            );
                            break;
                          case "relationship":
                            return (
                              <GridItem colSpan={[1, , , 3]}>
                                <Relationship
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                  tabList={item.tabList}
                                />
                              </GridItem>
                            );
                            break;
                          case "questions":
                            return (
                              <GridItem colSpan={[1, , , 3]}>
                                <QuestionInputsForBusiness
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                  values={values}
                                  setValues={setValues}
                                />
                              </GridItem>
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
                                schema={item.schema}
                              />
                            );
                            break;
                          default:
                            break;
                        }
                      })}
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        )}
      </>
    );
  }
);
