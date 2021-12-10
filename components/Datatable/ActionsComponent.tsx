import { FC, useContext } from "react"
import { EditIcon, TrashIcon, ViewIcon } from "../icons"
import { ButtonIcon } from "../Inputs"

interface propsActionsComponent {
    
}
const ActionsComponent : FC <propsActionsComponent> = (props) => {
    return (
        <div className="flex gap-1">
            <ButtonIcon onClick={() => {}} >
                <EditIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon onClick={() => {}}>
                <ViewIcon className="w-5 h-5" />
            </ButtonIcon>
            <ButtonIcon onClick={() => {
            }}>
                <TrashIcon className="w-5 h-5" />
            </ButtonIcon>
        </div>
    )
}

export default ActionsComponent
