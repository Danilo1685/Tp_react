import { Fragment } from "react";
import { ProgressSpinner }from 'primereact/progressspinner'


const UsersView =({loadingUsers,dataUsers})  => {
    return(
        <Fragment>
        {loadingUsers ?
        <ProgressSpinner />
        :  
        dataUsers.map((user)=> ( // el siguiente conponente que sigue despues del map lleva  key
            <div key={user.id}>
                <h2>Name: {user.name}</h2>
                <h3>Email: {user.email}</h3>
            </div> 

        ))
        }

    </Fragment>
    )
}
export default UsersView