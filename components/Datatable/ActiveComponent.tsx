import { FC, useEffect, useState } from "react"

interface propsActiveComponent {
    value : string
}
const ActiveComponent : FC <propsActiveComponent> = (props) => {
    const [value, setValue] = useState(props?.value)
    useEffect(() => {
       setValue(props?.value)
    }, [props?.value])
    return (
        <div className="flex items-center justify-center w-full">
            <label className={` ${value ? "bg-green-500" : "bg-red-500"} text-white px-2 py-1 text-xs rounded-full`}>
                {value ? "Activo" : "Inactivo"}
            </label>
        </div>
    )
}

export default ActiveComponent
