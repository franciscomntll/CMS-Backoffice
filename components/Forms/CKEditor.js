import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const CKEditorComponent = () => {
  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data="<p>Hello from CKEditor 5!</p>"
      onChange={(values) => console.log(values)}
    />
  );
};

export default CKEditorComponent;
