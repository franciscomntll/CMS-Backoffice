import {
    SettingsIcon,
} from "@chakra-ui/icons";
import {
    Flex,
    Tooltip,
    Divider,
    Heading,
    Checkbox,
    FormLabel,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";

const MenuFilter = () => {

    return (
        <>
            <Menu>
                <Tooltip label={"Editar columnas"}>
                    <MenuButton>
                        <IconButton icon={<SettingsIcon />} />
                    </MenuButton>
                </Tooltip>
                <MenuList
                    h={"15rem"}
                    overflow={"auto"}
                    bg={"white"}
                    p={"1rem"}
                    rounded={"lg"}
                    shadow={"md"}
                >
                    <Flex flexDir={"column"}>
                        <Heading as={"p"} fontSize={"sm"}>
                            Campos mostrados
                        </Heading>
                        <Divider paddingBlock={"0.3rem"} />
                        <FormLabel
                            paddingTop={"0.5rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            fontSize={"sm"}
                        >
                            <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
                            Seleccionar todos
                        </FormLabel>
                        {allColumns.map((column) => (
                            <FormLabel
                                display={"flex"}
                                alignItems={"center"}
                                gap={"0.5rem"}
                                fontSize={"sm"}

                            >
                                <Checkbox
                                    type={"checkbox"}
                                    isChecked={column.getToggleHiddenProps().checked}
                                    {...column.getToggleHiddenProps()}
                                />
                                {typeof column.Header === "string"
                                    ? column.Header
                                    : column.id}
                            </FormLabel>
                        ))}
                    </Flex>
                </MenuList>
            </Menu>
        </>
    )

}
export default MenuFilter