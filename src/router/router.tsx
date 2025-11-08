import { Route, Routes } from "react-router";
import { App } from "../App";



export function MyRouter(){
    return(
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
    )
}