import { Flex } from "@chakra-ui/react"
import { CpaSuscripcion } from "../components/Suscripcion/CpaSuscripcion"
import { InvForm } from "../components/formularios/InvForm"


const Cpa = () => {
    return (
        <>
            <Flex as={"section"} flexDir={"column"} overflow={"auto"} h={"100%"} className="flex justify-center items-center" >
                {/* <CpaSuscripcion /> */}
                <InvForm/>
            </Flex >
        </>
    )
}

export default Cpa