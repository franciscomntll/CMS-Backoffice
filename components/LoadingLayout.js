import {Flex, Spinner} from '@chakra-ui/react'
export const LoadingLayout = () => {
    return (
        <Flex zIndex={"100"} alignItems={"center"} justifyContent={"center"} h={"100%"} w={"100%"} top={0} left={0} pos={"fixed"} bg={"white"} gap={"1rem"}>
            <Spinner/>
            Cargando
        </Flex>
    )
}