import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <Flex h={"100vh"} overflow={"hidden"} w={"100%"}>
      <Sidebar state={show} />
      <Flex flexDir={"column"} w={"100%"}>
        <Navigation set={setShow} state={show} />
        <Box as={"main"} p={"2rem"} bg={"gray.50"} h={"full"}>
        {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
