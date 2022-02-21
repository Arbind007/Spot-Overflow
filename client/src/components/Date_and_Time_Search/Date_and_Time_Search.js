import React, { useEffect, useState } from "react"
import Terminal, { ColorMode, LineType } from "react-terminal-ui"
import "./style.css"
export default function Live_Readings() {
    return (
        <div>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">date_range</i>
                            <input
                                id="icon_prefix"
                                type="text"
                                class="validate"
                            />
                            <label for="icon_prefix">Date</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">access_time</i>
                            <input
                                id="icon_telephone"
                                type="tel"
                                class="validate"
                            />
                            <label for="icon_telephone">Time</label>
                        </div>
                    </div>
                </form>
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
                        <tr>
                            <td>Wed Jan 12 2022 </td>
                            <td>18:21:33 </td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Wed Jan 12 2022 </td>
                            <td>09:49:20 </td>
                            <td>36.6</td>
                        </tr>
                        <tr>
                            <td>Wed Jan 12 2021</td>
                            <td>09:49:45</td>
                            <td>78.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
