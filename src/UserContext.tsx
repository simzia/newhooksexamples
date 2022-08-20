import { create } from "domain";
import { createContext, useState } from "react";
import { userType, todoType, userList } from "./interface";

type ThemeContextProviderProps = {
    children: React.ReactNode
}
const UserContext = createContext<userType[] | null>(null);
// const TodoContext = createContext<todoType | null>(null);
// const UserContext = createContext();

export function UserProvider({children}: ThemeContextProviderProps){
    const [userData, setUserData] = useState<userType[]>([]);
    const addUser = (email: string, password: string) => {
        const arry = [...userData]
        arry.forEach((item) => {
            item.email === email ? (
                console.log("login true")
            ) : (
                console.log("auth screen")
                
            )
        })
        // setUserData((prevState) => [...prevState, {email, password}])
        setUserData(arry)
    }
    return (
        <UserContext.Provider value={{userData, addUser}}>{children}</UserContext.Provider>
    )
}


export default UserContext;