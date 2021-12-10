import { FC, useContext } from "react"
import { PopupContext, PopupState } from "../../context/PopupContext"
import { XIcon } from "../icons"
import { ButtonIcon } from "../Inputs"

interface propsModal {
    title: string
}

const Modal : FC <propsModal> = ({title, children}) => {
    const {setShow} = useContext(PopupContext)
    return (
        <div className="w-1/2 h-3/4  bg-white rounded-xl shadow-lg z-40 relative p-6">
            <span className="absolute top-4 right-4">
            <ButtonIcon onClick={() => {setShow(new PopupState(false, "", []))}}>
                <XIcon className="text-indigo-500 w-6 h-6" />
            </ButtonIcon>
            </span>
            <h2 className="text-xl w-full text-center text-indigo-500 font-bold">{title}</h2>
            gg
            {children}
        </div>
    )
}

export default Modal
