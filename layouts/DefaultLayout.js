import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <Flex h={"100vh"} w={"100%"} overflow={"hidden"} >
      <Sidebar state={show} />
      <Flex flexDir={"column"} w={"calc(100% - 14rem)"}>
        <Navigation set={setShow} state={show} />
        <Box as={"main"} p={"2rem"} bg={"gray.50"} h={"full"} w={"100%"}>
        {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
