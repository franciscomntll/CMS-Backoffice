import dynamic from "next/dynamic";
const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  { ssr: false }
);

import Editor from '@ckeditor/ckeditor5-build-classic'


import { Divider, Flex, FormLabel, Text } from "@chakra-ui/react";
import { useField } from "formik";
import { UploadAdapter } from "utils/UploadAdapter";
import { useCallback } from "react";

export const CKEditorComponent = ({ label, ...props }) => {
  const [field, meta, helpers] = useField({ ...props });

  const CustomUploadAdapterPlugin = useCallback((editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = loader => {
      // Create new object and pass server url
      return loader && new UploadAdapter(loader)
    };
  })

  const editorConfiguration = {
    
    extraPlugins : [CustomUploadAdapterPlugin],
    toolbar: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		],
    language: 'es',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    
  }
  return (
    <>
      {typeof window !== "undefined" && (
        <>
        <Divider />
        <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>
        <Flex gap={"0.3rem"} alignItems={"center"}>
          {label}
          {meta.touched && meta.error && (
            <Text color={"red"} fontSize={"xs"} fontWeight={"500"}>
              {meta.error}
            </Text>
          )}
        </Flex>
          </FormLabel>
          <CKEditor
            editor={Editor}
            config={editorConfiguration}
            onChange={(event, editor) => helpers.setValue(editor.getData())}
            data={field.value}
          />
        </>
      )}
    </>
  );
};
