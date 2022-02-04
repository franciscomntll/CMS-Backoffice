import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import dynamic from 'next/dynamic'
const AuthProvider = dynamic (() => import('context/AuthContext').then(mod => mod.AuthProvider))
const Sidebar = dynamic (() => import('components/Sidebar').then(mod => mod.Sidebar))
const Navigation = dynamic (() => import('components/Navigation').then(mod => mod.Navigation))
export const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <AuthProvider>
    <Flex h={"100vh"} w={"100%"} overflow={"hidden"} >
      <Sidebar state={show} />
      <Flex flexDir={"column"} w={show ? "calc(100% - 14rem)" : "100%"}>
        <Navigation set={setShow} state={show} />
        <Box as={"main"} p={"2rem"} bg={"gray.100"} h={"full"} w={"100%"}>
        {children}
        </Box>
      </Flex>
    </Flex>
    </AuthProvider>
  );
};

