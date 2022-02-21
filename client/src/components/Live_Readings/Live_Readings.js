import React, { useEffect, useState } from "react"
import Terminal, { ColorMode, LineType } from "react-terminal-ui"
import axios from "axios"
import "./style.css"
export default function Live_Readings() {
    let [value, setdata] = React.useState('')
    useEffect(() => {
        axios
            .get("https://spotoverflow.herokuapp.com/getdatafrontend")
            .then((res) => {
                console.log(res.data.data);
                setdata(res.data)
            });
    }, [])
    return (
        <div>
            <div className="container center" style ={{ marginTop: '150px',marginBottom: '92.5px' }}>
                <h1 className="display-1" style={{'font-family': "'Brush Script MT', cursive", "fontSize":'100px'}}> {value.data} </h1>
            </div>
        </div>
    )
}
