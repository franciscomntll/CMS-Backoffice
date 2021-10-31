import { FC } from "react"
import { propsIcons } from "."


export const MenuIcon : FC <propsIcons> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"{...props}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
</svg>
    )
}


