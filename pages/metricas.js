import { Flex } from "@chakra-ui/react"
import { MetricasSuscripcion } from "../components/Suscripcion/MetricasSuscripcion"


const metricas = () => {
    return (
        <>
            <Flex as={"section"} flexDir={"column"} overflow={"auto"} h={"100%"} >
                <MetricasSuscripcion />
            </Flex >
        </>
    )
}

export default metricas