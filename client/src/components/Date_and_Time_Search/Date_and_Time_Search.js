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
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">access_time</i>
                            <input
                                id="icon_telephone"
                                type="tel"
                                class="validate"
                            />
                            <label for="icon_telephone">Telephone</label>
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
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
