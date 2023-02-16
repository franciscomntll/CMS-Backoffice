import { SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react"
import { PagesWithAuth } from "../HOC/PageWithAuth"

function HomePage() {
  return (
    <>
    <SimpleGrid spacing={10} columns={3} w={"100%"} >
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel  className="" >Empresas</StatLabel>
        <StatNumber fontSize={"2xl"}>102</StatNumber>
      </Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel >Categorias de empresas</StatLabel>
        <StatNumber fontSize={"2xl"}>75</StatNumber>
      </Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel>Articulos Blog</StatLabel>
        <StatNumber fontSize={"2xl"}>68</StatNumber>
      </Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel>Categorias Blog</StatLabel>
        <StatNumber fontSize={"2xl"}>12</StatNumber>
      </Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel>Usuarios Registrados</StatLabel>
        <StatNumber fontSize={"2xl"}>1002</StatNumber>
      </Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"} bg={"white"}>
        <StatLabel>Administradores</StatLabel>
        <StatNumber fontSize={"2xl"}>100</StatNumber>
      </Stat>

    </SimpleGrid>
    
    </>
  )
}

export default PagesWithAuth(HomePage)