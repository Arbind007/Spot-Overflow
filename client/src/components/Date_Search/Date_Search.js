import React, { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"

export default function Live_Readings() {
    const [data, setdata] = useState([{}])
    const [date, setdate] = useState("")
    // useEffect(() => {
    //     var data = {}
    //     data.date = date
    //     axios
    //         .post("https://spotoverflow.herokuapp.com/getsavedatequery", data)
    //         .then((res) => {
    //             // console.log(res.data)
    //             setdata(res.data)
    //             // console.log(data)
    //         })
    // })
    function handleClick(e) {
        e.preventDefault()
        var data = {}
        data.date = date
        axios
            .post("https://spotoverflow.herokuapp.com/getsavedatequery", data)
            .then((res) => {
                // console.log(res.data)
                setdata(res.data)
                // console.log(data)
            })
    }
    return (
        <div>
            <div class="row">
                <form class="col s10">
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">search</i>
                            <input
                                id="icon_prefix"
                                type="text"
                                class="validate"
                                onChange={(e) => setdate(e.target.value)}
                            />
                            <label for="icon_prefix">Date</label>
                        </div>
                    </div>
                </form>
                <div class="col s2">
                    <button onClick={(e) => handleClick(e)}>Search</button>
                </div>
            </div>
            <div>
                <table
                    className="centered responsive-table striped"
                    style={{ width: "80%", margin: " 1% 10%" }}
                >
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Sensor Reading</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((post) => (
                            <tr className="">
                                <th scope="row">{post.date}</th>
                                <th scope="row">{post.time}</th>
                                <th scope="row">{post.sensor_reading}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
