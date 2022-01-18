import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Container,
  Flex,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Text,
  IconButton,
  Link,
} from "@chakra-ui/react";

const Navigation = ({set, state}) => {
  const Options = [
    {title: "Inicio", route: "/"},
    {title: "Configuración", route: ""},
    {title: "Cerrar Sesión", route: ""},

  ]
  return (
    <Flex bg={"white"} shadow={"sm"} w={"100%"} padding={"1rem"}>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
        maxW={"container.xl"}
      >
        <IconButton onClick={() => set(!state)}>
          <HamburgerIcon w={"1.5rem"} h={"1.5rem"} color={"gray.500"} />
        </IconButton>
        <Menu>
          <MenuButton>
            <Flex alignItems={"center"} gap={"0.5rem"}>
              <Avatar size={"sm"} />
              <Text fontSize={"md"} letterSpacing={"tight"} color={"gray.500"}>
                Francisco Montilla
              </Text>
            </Flex>
          </MenuButton>
          <MenuList p={"0"} fontSize={"sm"}>
           {Options.map((item,idx) => (
             <Link href={item.route}>
              <MenuItem key={idx} color={"gray.500"}>{item.title}</MenuItem>
             </Link>
           ))}
           
          </MenuList>
        </Menu>
      </Container>
    </Flex>
  );
};

export default Navigation;
