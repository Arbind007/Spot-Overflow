import React, { useEffect, useState } from "react"
import Terminal, { ColorMode, LineType } from "react-terminal-ui"
import "./style.css"
export default function Live_Readings() {
    const [terminalLineData, setTerminalLineData] = useState([
        {
            type: LineType.Output,
            value: "Below are the Live Readings of the Sensor!"
        },
        { type: LineType.Output, value: "Some previous input received" },
        {
            type: LineType.Output,
            value: "water Level is at : 12 meters above sea-level as of 03:05 PM"
        },
        {
            type: LineType.Output,
            value: "water Level is at : 152 meters above sea-level as of 08:05 PM"
        },
        {
            type: LineType.Output,
            value: "water Level is at : 1152 meters above sea-level as of 12:05 AM"
        },
        {
            type: LineType.Output,
            value: "water Level is at : 1247 meters above sea-level as of 11:05 PM"
        }
    ])
    return (
        <div>
            <div className="container">
                <Terminal
                    name="Live Readings of the Sensor"
                    colorMode={ColorMode.Dark}
                    lineData={terminalLineData}
                    onOutput={(terminalInput) =>
                        console.log(
                            `New terminal input received: '${terminalInput}'`
                        )
                    }
                />
            </div>
        </div>
    )
}
