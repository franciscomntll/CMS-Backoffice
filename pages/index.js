import { Button, Flex, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"

function HomePage() {
    return (
      <SimpleGrid spacing={10} columns={3} w={"100%"} >
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Empresas</StatLabel>
  <StatNumber fontSize={"2xl"}>102</StatNumber>
</Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Categorias de empresas</StatLabel>
  <StatNumber fontSize={"2xl"}>75</StatNumber>
</Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Articulos Blog</StatLabel>
  <StatNumber fontSize={"2xl"}>68</StatNumber>
</Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Categorias Blog</StatLabel>
  <StatNumber fontSize={"2xl"}>12</StatNumber>
</Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Usuarios Registrados</StatLabel>
  <StatNumber fontSize={"2xl"}>1002</StatNumber>
</Stat>
      <Stat border={"1px solid"} borderColor={"gray.300"} p={"1rem"} rounded={"xl"} w={"100%"}>
  <StatLabel>Administradores</StatLabel>
  <StatNumber fontSize={"2xl"}>100</StatNumber>
</Stat>

      </SimpleGrid>
    )
  }
  
  export default HomePage