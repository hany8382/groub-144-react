import { MyContexet } from "./App"
import { useContext } from "react"

export function Card(){
    const data = useContext(MyContexet)
    return(
        <>
        <h2>name</h2>
        <p>{data}</p>
        </>
    )
}