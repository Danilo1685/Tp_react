import { Fragment } from "react";
import {Button} from "primereact/button"

const MyButton =({count,setCount}) => {
    console.log("Este es el contador ",count);

    return(
        <div className="flex align-items-center justify-content-between">
            
            <Button onClick={() => setCount((count)= count+1)} label="+1"/>
            <h2>{count}</h2>
            <Button onClick={() => setCount((count)= count-1)} label="-1"/>

        </div>
    )
}

export default MyButton