import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Text,
  IconButton,
  } from "@chakra-ui/react";
import {AuthContextProvider} from 'context/AuthContext';
import Link from 'next/link';
import { useRouter } from "next/router";
import { authentication } from "utils/Authentication";
;



export const Navigation = ({set, state}) => {
  const {user} = AuthContextProvider()
  const router = useRouter()
  const Options = [
    {title: "Inicio", route: "/"},
    {title: "Configuración", route: "/"},
    {title: "Cerrar Sesión", function : async () => {
      authentication.SignOut()
      localStorage.removeItem("tokenAdminBodas")
      await router.push("/login")
    }},

  ]
  return (
    <Flex bg={"white"} shadow={"sm"} w={"100%"} padding={"0.5rem"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
        px={"1.5rem"}
      >
        <IconButton onClick={() => set(!state)}>
          <HamburgerIcon w={"1.5rem"} h={"1.5rem"} color={"gray.500"} />
        </IconButton>
        <Menu>
          <MenuButton>
            <Flex alignItems={"center"} gap={"0.5rem"}>
              <Avatar size={"sm"} />
              <Text fontSize={"sm"} letterSpacing={"tight"} color={"gray.500"}>
                {user?.email}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList p={"0"} fontSize={"sm"}>
           {Options.map((item,idx) => (
             item.route ? (
              <Link key={idx} href={item.route}>
              <MenuItem color={"gray.500"}>{item.title}</MenuItem>
             </Link>
             ) : (
              <MenuItem key={idx} onClick={item?.function} color={"gray.500"}>{item.title}</MenuItem>
             )
           ))}
           
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

