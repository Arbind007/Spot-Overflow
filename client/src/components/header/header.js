import React from "react"
import { Link } from "react-router-dom"

export default function header() {
    return (
        <div>
            <nav style={{ backgroundColor: "#51B5DF" }}>
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo right">
                        SpotOverflow
                    </Link>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li>
                            <Link to="/live">Live Readings</Link>
                        </li>
                        <li>
                            <Link to="/only_date">Search with Date</Link>
                        </li>
                        <li>
                            <Link to="/date_and_time">
                                Search with Date and Time
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
