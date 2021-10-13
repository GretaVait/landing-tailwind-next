import { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {

  const [selectedOptions, setSelectedOptions] = useState({})

  const saveSelectedOptions = (values) => {
    setSelectedOptions(values)
  }

  return (
    <AppContext.Provider value={{ selectedOptions, saveSelectedOptions }}>
      {props.children}
    </AppContext.Provider>
  )
}