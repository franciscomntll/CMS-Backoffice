import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import dynamic from 'next/dynamic'
import { useEffect } from "react";
const AuthProvider = dynamic(() => import('../context/AuthContext').then(mod => mod.AuthProvider))
const Sidebar = dynamic(() => import('../components/Sidebar').then(mod => mod.Sidebar))
const Navigation = dynamic(() => import('../components/Navigation').then(mod => mod.Navigation))


export const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(true);


 

  return (
    <AuthProvider>
      <Flex h={"100vh"} w={"100%"} overflow={"hidden"} position={"relative"} >

        <div className="">
          <Sidebar state={show} />
        </div>
        <Flex flexDir={"column"} w={show ? "calc(100% - 14rem)" : "100%"}>
          <Navigation set={setShow} state={show}  />
          <Box as={"main"} p={"0.5rem"} /* bg={"gray.100"} */ h={"full"} w={"100%"} className="bg-bg">
            {children}

          </Box>
        </Flex>
      </Flex>
    </AuthProvider>
  );
};

