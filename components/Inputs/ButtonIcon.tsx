import { FC, MouseEventHandler } from "react"

interface propsButtonIcon {
    onClick : MouseEventHandler
}


export const ButtonIcon : FC <propsButtonIcon> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="focus:outline-none border-2 border-gray-100 rounded-xl hover:bg-gray-100 bg-white p-2 transition text-gray-700">
            {children}
        </button >
    )
}

