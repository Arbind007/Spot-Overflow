import React from "react"
import { Link } from "react-router-dom"
export default function card() {
    return (
        <div>
            <div class="row">
                <div class="col m4">
                    <div class="card small">
                        <div class="card-image">
                            <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                            <span class="card-title">Live Readings</span>
                        </div>
                        <div class="card-content">
                            <p>
                                This Page of the website displays the Live
                                readings fetched directly from our sensors.
                            </p>
                        </div>
                        <Link to="/live">
                            <div class="card-action">Check Readings</div>
                        </Link>
                    </div>
                </div>
                <div class="col m4">
                    <div class="card small">
                        <div class="card-image">
                            <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                            <span class="card-title">Search with Date</span>
                        </div>
                        <div class="card-content">
                            <p>
                                This Section of the website gives user the
                                ability to get sensor readings as per date.
                            </p>
                        </div>
                        <Link to="/only_date">
                            <div class="card-action">Check Readings</div>
                        </Link>
                    </div>
                </div>
                <div class="col m4">
                    <div class="card small">
                        <div class="card-image">
                            <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
                            <span class="card-title">
                                Search with Date and Time
                            </span>
                        </div>
                        <div class="card-content">
                            <p>
                                This Section of the website gives user the
                                ability to get sensor readings as per both date
                                and time.
                            </p>
                        </div>
                        <Link to="/date_and_time">
                            <div class="card-action">Check Readings</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
