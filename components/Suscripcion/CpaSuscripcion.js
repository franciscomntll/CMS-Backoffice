import { Flex, Link } from "@chakra-ui/react"
import { CuadroInfoPequeño } from "./Items/CuadroInfo"
import { CuadroInfoGrande } from "./Items/CuadroInfoGrande"
import { GraficoRedondo, PortaPapeles, GraficoCuadrado, GanchoIcon } from "../Icons/index"

export const CpaSuscripcion = () => {

    const arryInfo = [
        {
            title: "Publica sin esfuerzo el mismo contenido en todas tus redes",
            icon: <GanchoIcon />
        },
        {
            title: "Programa y publica automaticamente desde la app en apenas segundos",
            icon: <GanchoIcon />
        },
        {
            title: "Crea, gestiona y mejora tus campañas de google ads y facebook ads",
            icon: <GanchoIcon />
        }
    ]

    return (
        <>
            <Flex flexDir={"column"} overflow={"auto"} h={"100%"} className="px-2 py-5 mb-20" >
                <div className="flex flex-col items-center gap-3 mb-3 ">
                    <h1 className="text-tituloPrimario text-xl w-[60%] text-center">
                        Actualmente no cuentas con una suscripcion a Campañas
                    </h1>
                    <h2 className="text-tituloSecundario">
                        Realiza campañas y marketing en un solo sitio con el complemento campañas
                    </h2>
                    <button className="text-sm text-white p-3 rounded-xl  bg-verde shadow-md">
                        Suscribete a Campañas
                    </button>
                    <Link >
                        <p className="text-xs text-blue-500 underline">ver precios</p>
                    </Link>
                </div>

                <div className=" flex flex-col gap-3 divide-y ">
                    <div className="grid grid-cols-3 gap-5  ">
                        <CuadroInfoPequeño
                            imgPNG={"/placeholder/EmailPNG.png"}
                            title={"Crear asombrosos correos electronicos"}
                            subtitle={"Elige de entre un monton de plantillas de correo electronico personalizables y profesionales que atraen la atencion"}
                        />

                        <CuadroInfoPequeño
                            imgPNG={"/placeholder/LibretaPNG.png"}
                            title={"Fomenta tus contactos"}
                            subtitle={"Convierte los clientes potenciales en prospectos y clientes de ventas de alto potencial "}
                        />

                        <CuadroInfoPequeño
                            imgPNG={"/placeholder/SeoPNG.png"}
                            title={"Optimiza ti proxima campaña"}
                            subtitle={"Conoce que campaña llega al corazon de tu audiencia con informacion en tiempo real"}
                        />
                    </div>

                    <div className="flex justify-center pt-3" >
                        <CuadroInfoGrande
                            imgPNG={"/placeholder/PortaPapelesPNG.png"}
                            title={"Aun mas razones para obtener tus metricas"}
                            arryInfo={arryInfo}
                        />
                    </div>
                </div>
            </Flex>
        </>
    )
}