import { Box, Flex, FormLabel, Input, Square, Text, Image, Icon, IconButton } from "@chakra-ui/react";
import { useField } from "formik";
import { memo, useEffect, useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export const MultipleImages = memo(({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [image, setImage] = useState([])


  useEffect(() => {
    helpers.setValue(image.map(item => item.file))
  }, [image]);
  

  const handleChange = async (e) => {
    try {
      let file = e.target.files;
      const arrayOfFiles = Object.values(file)

      arrayOfFiles?.forEach((item) => {
        console.log(item)
        let reader = new FileReader();
        reader.onloadend = async () => {
          if (reader.result) {
            const nuevaImagen = {
              id : Math.random().toString(36).slice(2),
              file: item,
              image : reader.result
            }
            //helpers?.setValue([...field?.value, item])
           setImage(old => [...old, nuevaImagen])
          }
        };

        reader.readAsDataURL(item);
      })
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (id) => {
    setImage(old => old.filter(item => item.id !== id))
  }
  return (
    <Box>
        {label}
        <Flex
          alignItems={"center"}
          w={"100%"}
          border={"2px dotted"}
          borderColor={"gray.300"}
          rounded={"xl"}
          color={"gray.400"}
          pos={"relative"}
          p={"2rem"}
          gap={"2rem"}
          flexWrap={"wrap"}
          >
          <FormLabel>
          <Square shadow={"md"} h={"8rem"} w={"8rem"} rounded={"lg"} border={"1px solid"} borderColor={"gray.100"} cursor={"pointer"}>
            <AddIcon />
          </Square>
          <Input
          type="file"
          display={"none"}
          accept={"image/*"}
          multiple
          onChange={handleChange}
        />
      </FormLabel>
          {image?.map((item, idx)=> (
            <Square key={idx} shadow={"md"} h={"8rem"} w={"8rem"} rounded={"lg"} border={"1px solid"} borderColor={"gray.100"} pos={"relative"} >
              <Image src={item.image} objectFit={"contain"} pos={"absolute"} h={"100%"} w={"100%"} />
              <IconButton onClick={() => handleRemove(item.id)} size={"xs"} pos={"absolute"} bottom={"2"} right={"2"} icon={<DeleteIcon />} />
            </Square>
          ))}
        </Flex>
        
    </Box>
  );
});
