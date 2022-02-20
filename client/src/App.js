import React, { useEffect, useState } from "react"
import Header from "./components/header/header"
import logo from "./assets/wave.svg"
import Card from "./components/card/card"
import axios from "axios"

function App() {
    const { data, setdata } = useState()
    useEffect(() => {
        // axios
        //     .get("https://spotoverflow.herokuapp.com/getdatafrontend")
        //     .then((res) => {
        //         console.log(res.data);
        //     });
        // axios
        //     .get("https://spotoverflow.herokuapp.com/getsavedata")
        //     .then((res) => {
        //         console.log(res.data);
        //     });
        // axios
        //     .get("https://spotoverflow.herokuapp.com/getsavedata")
        //     .then((res) => {
        //         console.log(res.data);
        //     });

        axios({
            method: "get",
            url: "http://localhost:5001/getsavedatetimequery",
            params: {
                "date": "12 2022",
                "time": "09"
            }
        }).then((res) => console.log(res.data))
    }, [])
    return (
        <div className="App">
            <Header />
            <Card />
            <img src={logo} />
        </div>
    )
}

export default App
