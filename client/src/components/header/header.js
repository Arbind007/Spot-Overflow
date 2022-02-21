import React from "react"
export default function header() {
    return (
        <div>
            <nav style={{ backgroundColor: "#51B5DF" }}>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo right">
                        SpotOverflow
                    </a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li>
                            <a href="sass.html">Live Readings</a>
                        </li>
                        <li>
                            <a href="badges.html">Search with Date</a>
                        </li>
                        <li>
                            <a href="collapsible.html">
                                Search with Date and Time
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
