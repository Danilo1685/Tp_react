import { Fragment } from "react";
import { useState,useEffect }from 'react'
import { ProgressSpinner }from 'primereact/progressspinner'
import UsersView from "./UsersView";
const UsersContainer =() => {

    const [dataUsers, setDataUsers] = useState([]),
    [loadingUsers, setLoadingUsers] = useState(true);
    
    const getDAtaUsers = async() => {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log("responde",response)
        if(!response.ok){
            console.log("error en la peticion")
        }

        const result = await response.json()
        setDataUsers(result)
    }catch(error){
        console.log("Erro en la peticion", error)
    }finally{
        setLoadingUsers (false)
    }
    console.log("setDataUsers",dataUsers)
    }

useEffect(() => {
        getDAtaUsers()
    },[])

return(
    <UsersView loadingUsers={loadingUsers} dataUsers={dataUsers}/>
)

}

export default UsersContainer