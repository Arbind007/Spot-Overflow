import React, { useEffect, useState } from "react"
import Header from "./components/header/header"
import logo from "./assets/wave.svg"
import Card from "./components/card/card"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Live_Readings from "./components/Live_Readings/Live_Readings"
import Date_Search from "./components/Date_Search/Date_Search"
import Date_and_Time_Search from "./components/Date_and_Time_Search/Date_and_Time_Search"
function App() {
    const { data, setdata } = useState()
    useEffect(() => {
        // var data = {}
        // data.date = "2021"
        // axios
        //     .post("http://localhost:5001/getsavedatequery", data)
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        // axios
        // .get("https://spotoverflow.herokuapp.com/getdatafrontend")
        // .then((res) => {
        //     // console.log(res.data);
        // });
        // axios
        //     .get("https://spotoverflow.herokuapp.com/getsavedata")
        //     .then((res) => {
        //         console.log(res.data);
        //     });
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Header />
                        <Card />
                        <img src={logo} />
                    </div>
                </Route>
                <Route path="/live">
                    <div className="App">
                        <Header />
                        <Live_Readings />
                        <img src={logo} />
                    </div>
                </Route>
                <Route path="/only_date">
                    <div className="App">
                        <Header />
                        <Date_Search />
                        <img src={logo} />
                    </div>
                </Route>
                <Route path="/date_and_time">
                    <div className="App">
                        <Header />
                        <Date_and_Time_Search />
                        <img src={logo} />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
