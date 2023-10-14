import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../toolkit/api.config";
import "./DayMoment.css";
import Overlay from "../../atoms/Overlay";

const DayMoment = () => {
  const [data, setData] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      axios(api("GET", `lat=${lat}&lng=${long}`))
        .then((response) => {
          setData(response.data.results);
          setDataIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  if (dataIsLoaded) {
    let sunrise = data.sunrise;
    let sunset = data.sunset;

    let actualTime = new Date().toLocaleTimeString("en-US", { hour12: true });

    let dayTime = "Day";
    if (actualTime > sunrise && actualTime < sunset) {
      dayTime = "Day";
    } else {
      dayTime = "Night";
    }

    let body = document.querySelector("body");
    if (dayTime === "Night") {
      body.style.backgroundColor = "#242424";
    } else {
      body.style.backgroundColor = "#f3fbff";
    }
    } else {
      return (
        <Overlay />
      );
    }
};

export default DayMoment;
