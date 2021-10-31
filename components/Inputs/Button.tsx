import { FC } from "react"

const variants = {
    primary : "text-white bg-blue-500 hover:bg-blue-600 ",
    secondary : "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
    warning : "text-white bg-red-500 hover:bg-red-600 ",
}

interface propsButton {
    variant: keyof typeof variants
}
export const Button : FC <propsButton> = ({variant, children, ...props}) => {
    return (
        <button className={`px-3 text-sm py-2 rounded-md transition flex items-center gap-1 ${variants[variant]}`} {...props}>
            {children}
        </button>
        )
}
