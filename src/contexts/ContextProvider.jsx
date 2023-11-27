import React, { createContext, useContext, useState } from 'react'

const stateContext = createContext()

const initailState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu,setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initailState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (cliked) => {
      setIsClicked({...initailState, [cliked]: true})
    }
  return (
    <stateContext.Provider
     value={ { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } }
    >
      {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext)