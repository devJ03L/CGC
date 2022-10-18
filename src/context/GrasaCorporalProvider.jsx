import { useState } from "react"
import { GrasaCorporalContext } from "./GrasaCorporalContext"

export const GrasaCorporalProvider = ({ children }) => {

    const [grasaCorporalInfo, setGrasaCorporalInfo] = useState()

    return (
        <GrasaCorporalContext.Provider value={{ grasaCorporalInfo, setGrasaCorporalInfo }}>
            {children}
        </GrasaCorporalContext.Provider>
    )
}