import {
  Avatar,
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
import { BodyStaticAPP } from "../utils/schemas";
import { AuthContextProvider } from "../context/AuthContext";

export const Sidebar = ({ state }) => {
  const [isActive, setActive] = useState("")
  const { user } = AuthContextProvider()
  const path = typeof window !== "undefined" && window.location.pathname

  return (
    <Flex
      pos={"relative"}
      w={"14rem"}
      h={"100vh"}
      shadow={"md"}
      bg={"white"}
      justifyContent={"start"}
      flexDir={"column"}
      marginLeft={`${state ? "" : "-9.5rem"}`}
      transitionProperty={"all"}
      transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"}
      transitionDuration={"150ms"}
    >

      <Flex alignItems={"center"} gap={"0.5rem"} p={"0.5rem"}>
        <div className={`flex  ${state ? "justify-star" : " justify-end "} items-center gap-2 cursor-pointer w-full bg-gray-100 py-2 px-2 rounded-xl`}>
          <Avatar size={"sm"} />
          <div>
            <Text className={`${state ? "block" : "hidden"} text-tituloPrimario`}>{user?.displayName ? user?.displayName : "Recarga Expres"}</Text>
            <Text className={`${state ? "block" : "hidden"} text-tituloSecundario text-sm`}>Admin</Text>
          </div>
        </div>
      </Flex>

      <Flex flexDir={"column"} className="overflow-y-auto overflow-x-hidden">
        {BodyStaticAPP.map((item, idx) => (
          <Box key={idx} paddingBlock={"0.5rem"} paddingTop="">
            <Menu>
              <MenuGroup key={idx} title={item.title} fontSize={"sm"} className={` ${state ? "block" : "hidden"} text-tituloPrimario`}>
                {/* <Divider className="mb-2" color={"black"} /> */}
                {item.children.map((item, idx) => (
                  <Link key={idx} href={`/${item.route}`}>
                    <MenuItem
                      key={idx}
                      color={path === `/${item.route}` ? "white" : "#637381"}
                      // _hover={{ bg: "green.50" }}
                      bg={path === `/${item.route}` ? "#30CB30" : ""}
                      _focus={{ bg: "#30CB30", textColor: "white", }}
                      padding={`${state ? "2" : ""}`}
                      marginLeft={"2"}
                      onClick={() => setActive(item.route)}
                      w={"95%"}
                      fontSize={"sm"}
                      transitionProperty={"all"}
                      transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"}
                      transitionDuration={"150ms"}
                      className={` flex  ${state ? "justify-star" : "justify-end"} items-center w-full rounded-md`}
                    >
                      <div className={`flex justify-estar ${state?"":`relative
                          before:content-[attr(data-tip)]
                          before:absolute
                          before:px-3 before:py-1.5
                          before:left-1/2 before:-top-3
                          before:w-max before:max-w-xs
                          before:-translate-x-1/2 before:-translate-y-full
                          before:bg-gray-700 before:text-white
                          before:rounded-md before:opacity-0
                          before:transition-all

                          after:absolute
                          after:left-1/2 after:-top-3
                          after:h-0 after:w-0
                          after:-translate-x-1/2 after:border-8
                          after:border-t-gray-700
                          after:border-l-transparent
                          after:border-r-transparent
                          after:border-b-transparent
                          after:opacity-0
                          after:transition-all

                          hover:before:opacity-100 hover:after:opacity-100`}`}
                          data-tip={`${item.title}`}
                          >
                        <div className={` pr-2 `}>{item.icon}</div>
                        <div className={
                          `pt-0.5                         
                          ${state ? "block" : `hidden` }
                          `}
                          
                          
                        >
                          {item.title}
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                ))}
              </MenuGroup>
            </Menu>
          </Box>
        ))}
      </Flex>

    </Flex>
  );
};

