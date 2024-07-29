import React, { Children, createContext, useState } from 'react'

export const DataContext = createContext(null)
function DataProvider({children}) {
    const [user, setUser] = useState({ useremail:'' })
  return (
   <DataContext.Provider value={{
     user,
     setUser
   }}>
    {children}
   </DataContext.Provider>
   
  )
}

export default DataProvider