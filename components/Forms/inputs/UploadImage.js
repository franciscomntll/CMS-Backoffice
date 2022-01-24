import { AddIcon, SunIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { useField } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { ImageIcon } from "../../icons";

export const UploadImage = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = async (e) => {
    try {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = async () => {
        if (reader.result) {
          const nuevaImagen = {
            file: file,
            image: reader.result,
          };
          helpers.setValue(nuevaImagen)
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
          {field.value && <Image layout="fill" src={field.value.image} objectFit="contain" objectPosition={"center"}/>}
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
