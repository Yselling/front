import axios from "axios";
import { useEffect, useState } from "react";
import timeApi from "../../../toolkit/api.config";

const DayMoment = () => {
    const [data, setData] = useState(null);
    const [DataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            axios(timeApi("GET", `lat=${lat}&lng=${long}`))
                .then((response) => {
                setData(response.data.results);
                setDataIsLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            })
        });
    }, []);

    if (DataIsLoaded) {
        let sunrise = data.sunrise;
        let sunset = data.sunset;

        let actualTime = new Date().toLocaleTimeString("fr-FR", { hour12: false });

        let dayTime = (actualTime > sunrise && actualTime < sunset) ? "Night" : "Day";

        // switch the root background color depending on the day moment, with a transition effect
        let root = document.getElementById('root');
        if (dayTime === "Night") {
            root.style.backgroundColor = "black";
            root.style.transition = "background-color 1s ease-in-out";
        } else {
            root.style.backgroundColor = "white";
            root.style.transition = "background-color 1s ease-in-out";
        }

        return (
            <div>
                <h1>Day Moment</h1>
                <p>It's {dayTime}!</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Day Moment</h1>
                <p>Loading...</p>
            </div>
        );
    }
}

export default DayMoment;