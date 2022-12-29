import { createContext, useState } from "react"

export const UserContexr = createContext()

 const UserProvider = ({children}) => {

    const [user, setUser] = useState(false);

  return (
    <UserContexr.Provider value={{user, setUser}}>
        {children}
    </UserContexr.Provider>
  )
}

export default UserProvider
