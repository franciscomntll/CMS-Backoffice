import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { FormLabel, GridItem } from "@chakra-ui/react";
import { useField } from "formik";

const CKEditorComponent = ({label, ...props}) => {
  const [field, meta, helpers] = useField({...props});
  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };
  return (
    <>
    <FormLabel>{label}</FormLabel>
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      onChange={(event, editor) => helpers.setValue(editor.getData()) }
      data={field.value}
    />
    </>
    
  );
};

export default CKEditorComponent;
