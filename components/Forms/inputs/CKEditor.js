const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react").then(mod => mod.CKEditor), {ssr: false});
const Editor = dynamic(() => import("ckeditor5-custom-build/build/ckeditor"), {
  ssr: false,
});
import dynamic from 'next/dynamic'
import { FormLabel, GridItem } from "@chakra-ui/react";
import { useField } from "formik";

const CKEditorComponent = ({ label, ...props }) => {
  const [field, meta, helpers] = useField({ ...props });
  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };
  return () => {
    if (typeof window !== "undefined") {
      <>
        <FormLabel>{label}</FormLabel>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          onChange={(event, editor) => helpers.setValue(editor.getData())}
          data={field.value}
        />
      </>;
    }
  };
};

export default CKEditorComponent;
