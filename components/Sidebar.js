import { Text, Flex, Heading, Box, Divider, Menu, MenuItem, MenuGroup } from "@chakra-ui/react"
import Link from "next/link"

const Sidebar = ({state}) => {
    const List = [
        {title: "Empresas", collections: [
            {title: "Empresas", route: "business"},
            {title: "Categorias", route: "categoriesBusiness"},
            {title: "Subcategorias", route: "subcategoriesBusiness"},
        ]},
        {title: "Blog", collections: [
            {title: "Posts", route: "posts"},
            {title: "Categorias", route: "categoriesPosts"},
            {title: "Subcategorias", route: "subcategoriesPosts"},
        ]},
    ]
    return (
        <Flex pos={"relative"} w={"16rem"} h={"100vh"} shadow={"md"} bg={"gray.500"} justifyContent={"start"} flexDir={"column"} marginLeft={`${state ? "" : "-16rem"}`} transitionProperty={"all"} transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"} transitionDuration={"150ms"}   >
            <Flex alignItems={"center"} gap={"0.5rem"} p={"1rem"}  >
                <Flex p={"0.8rem"} w={"fit-content"} rounded={"xl"} bg={"white"}>
                    <Heading color={"blue.500"} as={"p"} fontSize={"xl"} fontWeight={"700"}>PA</Heading>
                </Flex>
                <Text color={"white"}>Panel de administración</Text>
            </Flex>
            <Flex flexDir={"column"} >
                {List.map((item,idx) => (
                    <Box key={idx} paddingBlock={"0.5rem"}>
                    
                    <Menu>
                        <MenuGroup color={"white"} title={item.title} fontSize={"sm"}>
                            <Divider />
                            {item.collections.map((item,idx) => (
                                <Link href={item.route}>
                                <MenuItem key={idx} color={"white"} _hover={{bg: "gray.900"}} _focus={{bg: "gray.900"}}  w={"100%"} fontSize={"sm"}>{item.title}</MenuItem>
                                </Link>
                            ))}
                        </MenuGroup>
                            </Menu>
                 </Box>
                ))}
            </Flex>
            <Box pos={"absolute"} bottom={"3"} mx={"auto"} insetX={"0"} w={"fit-content"} color={"white"} fontSize={"xs"}>
                                Derechos Reservados © {(() => new Date().getFullYear())()}
            </Box>
        </Flex>
    )
}

export default Sidebar
