import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useField } from "formik";
import Image from "next/image";
import { ImageIcon } from "components/icons";
import { useState } from "react";

export const UploadImage = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [image, setImage] = useState(null)



  const handleChange = async (e) => {
    try {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = async () => {
        if (reader.result) {
          
          helpers.setValue(file)
          setImage(reader.result)
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <FormLabel>
        {label}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          border={"2px dotted"}
          borderColor={"gray.300"}
          h={"10rem"}
          rounded={"xl"}
          color={"gray.400"}
          pos={"relative"}
        >
          {!field.value && (
              <>
              <ImageIcon w={"3rem"} h={"3rem"} />
              <Text>Subir imagen</Text>
              </>
          )}
          {image && <Image layout="fill" src={image ?? ""} objectFit="contain" objectPosition={"center"}/>}
        </Flex>
        <Input
          type="file"
          display={"none"}
          accept={"image/*"}
          onChange={handleChange}
        />
      </FormLabel>
    </Box>
  );
};
