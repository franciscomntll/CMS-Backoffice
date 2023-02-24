import { Button } from "@chakra-ui/react"

export const InvForm = () => {
    return (
        <>
            <div className="w-[70%] h-[95%] bg-white rounded-xl shadow-md flex flex-col items-center py-5 gap-5">
                <div className="text-center">
                    <h1 className="text-xl text-tituloPrincipal">Manda una invitación</h1>
                    <h2 className="text-sm text-tituloSecundario">Invita a un usuario a registrarse en nuestros portales</h2>
                </div>
                <div className="w-1/2">
                    <form  >
                        <div className="flex flex-col gap-1 mb-3">
                            <label >Portal</label>
                            <label className="text-sm text-tituloSecundario">Indica el portal al cual se registrara el usuario</label>
                            <select className="mt-1 *block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm  focus:outline-none  sm:text-sm">
                                <option value="V-">Opcion 1</option>
                                <option value="J-">Opcion 2</option>
                                <option value="E-">Opcion 3</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                            <label >Correo Electrónico</label>
                            <label className="text-sm text-tituloSecundario">Indica el correo Electrónico de contacto del usuario</label>
                            <input className="mt-1 *block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm  focus:outline-none  sm:text-sm"/>
                              
                            
                        </div>
                        <div className="flex flex-col gap-1">
                            <label >Nombre Completo</label>
                            <label className="text-sm text-tituloSecundario">Indica el nombre completo del contacto</label>
                            <input className="mt-1 *block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm  focus:outline-none  sm:text-sm"/>

                        </div>
                    </form>
                </div>
                <div className="flex justify-between w-[30%]">
                    <button className="border-2 p-3 shadow-lg rounded-md border-verde text-verde "> cancelar </button>
                    <button className="border-2 py-3 px-5 rounded-md bg-verde text-white shadow-lg "> enviar </button>
                </div>
            </div>
        </>
    )
}