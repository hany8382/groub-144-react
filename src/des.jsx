import { MyContexet } from "./App"
import { useContext } from "react"

export function Description(){
    const data= useContext(MyContexet)
    return(
        <>
        <h3>desco</h3>
        <p>{data}</p>
        </>
    )
}