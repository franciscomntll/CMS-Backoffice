import { createIcon } from '@chakra-ui/react'

export const MenuIcon = createIcon({
    displayName: 'MenuIcon',
    viewBox: "0 0 24 24",
    d: 'M4 6h16M4 12h16M4 18h7',
  })

export const MenuIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    )
}
