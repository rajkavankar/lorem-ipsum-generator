import { createContext, useState } from "react"
export const RangeContext = createContext()

export const RangeProvider = ({ children }) => {
  const [range, setRange] = useState(10)

  const generateRandom = () => {
    setRange(Math.floor(Math.random() * 500 + 1))
  }

  return (
    <RangeContext.Provider value={{ range, setRange, generateRandom }}>
      {children}
    </RangeContext.Provider>
  )
}
