import {
  Text,
  Flex,
  Heading,
  Box,
  Divider,
  Menu,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { BodyStaticAPP } from "utils/schemas";

export const Sidebar = ({ state }) => {
  const [isActive, setActive] = useState("business")

  return (
    <Flex
      pos={"relative"}
      w={"14rem"}
      h={"100vh"}
      shadow={"md"}
      bg={"gray.500"}
      justifyContent={"start"}
      flexDir={"column"}
      marginLeft={`${state ? "" : "-14rem"}`}
      transitionProperty={"all"}
      transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"}
      transitionDuration={"150ms"}
    >
      <Flex alignItems={"center"} gap={"0.5rem"} p={"1rem"}>
        <Flex p={"0.8rem"} w={"fit-content"} rounded={"xl"} bg={"white"} _activeLink={true}>
          <Heading
            color={"blue.500"}
            as={"p"}
            fontSize={"xl"}
            fontWeight={"700"}
          >
            PA
          </Heading>
        </Flex>
        <Text color={"white"}>Panel de administración</Text>
      </Flex>
      <Flex flexDir={"column"}>
        {BodyStaticAPP.map((item, idx) => (
          <Box key={idx} paddingBlock={"0.5rem"}>
            <Menu>
              <MenuGroup key={idx} color={"white"} title={item.title} fontSize={"sm"}>
                <Divider />
                {item.children.map((item, idx) => (
                  <Link key={idx} href={item.route}>
                    <MenuItem
                      key={idx}
                      color={"white"}
                      bg={isActive === item.route ? "blue.600" : "gray.500"}
                      _hover={{ bg: "blue.800" }}
                      _focus={{bg: "blue.600"}}
                      onClick={() => setActive(item.route)}
                      w={"100%"}
                      fontSize={"sm"}
                      transitionProperty={"all"}
      transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"}
      transitionDuration={"150ms"}
                    >
                      {item.title}
                    </MenuItem>
                  </Link>
                ))}
              </MenuGroup>
            </Menu>
          </Box>
        ))}
      </Flex>
      <Box
        pos={"absolute"}
        bottom={"3"}
        mx={"auto"}
        insetX={"0"}
        w={"fit-content"}
        color={"white"}
        fontSize={"10px"}
      >
        Derechos Reservados © {(() => new Date().getFullYear())()}
      </Box>
    </Flex>
  );
};

