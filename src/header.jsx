import {MyContexet} from "./App"
import { useContext } from "react";
export function Header(){
const data = useContext(MyContexet)
    return(
       <>
        <h2>Header</h2>
        <p>{data}</p>
        </>
    )
}