import { Flex, Link } from "@chakra-ui/react"
import { CuadroInfoPequeño } from "./Items/CuadroInfo"
import { CuadroInfoGrande } from "./Items/CuadroInfoGrande"
import { GraficoRedondo, PortaPapeles, GraficoCuadrado, GanchoIcon } from "../Icons/index"

export const MetricasSuscripcion = () => {

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
                        Actualmente no cuentas con una suscripcion para medir tus metricas en redes sociales
                    </h1>
                    <h2 className="text-tituloSecundario">
                        Mide tu popularidad y la interaccion de los usuarios en tus redes sociales
                    </h2>
                    <button className="text-sm text-white p-3 rounded-xl  bg-verde shadow-md">
                        Ten acceso a tus metricas aqui
                    </button>
                    <Link >
                        <p className="text-xs text-blue-500 underline">ver precios</p>
                    </Link>
                </div>

                <div className=" flex flex-col gap-3 divide-y ">
                    <div className="grid grid-cols-3 gap-5  ">
                        <CuadroInfoPequeño
                            imgSVG={<GraficoRedondo />}
                            title={"Analiza, gestiona y crece tu presencia digital"}
                            subtitle={"revisa tus metricas y gestiona tu crecimiento digital"}
                        />

                        <CuadroInfoPequeño
                            imgSVG={<PortaPapeles />}
                            title={"Crea informes en segundos"}
                            subtitle={"Descarga los resultados de tus redes y genera informes avanzados en data Studio"}
                        />

                        <CuadroInfoPequeño
                            imgPNG={"/placeholder/bombilla.png"}
                            title={"Planificacion eficaz en tus redes sociales"}
                            subtitle={"Ahorra tiempo y mejora tu planificacion programando tus contenidos sociales "}
                        />
                    </div>

                    <div className="flex justify-center pt-3" >
                        <CuadroInfoGrande
                            imgSVG={<GraficoCuadrado />}
                            title={"Aun mas razones para obtener tus metricas"}
                            arryInfo={arryInfo}
                        />
                    </div>
                </div>
            </Flex>
        </>
    )
}