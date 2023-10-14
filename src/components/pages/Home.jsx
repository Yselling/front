import React from "react";
import Default from "../templates/Default";
import Card from "../atoms/Card/Card";
import DayMoment from "../organisms/DayMoment/DayMoment";

const Home = () => {
    return (
        <Default >
            <DayMoment />
            <Card bg-color="red" title="Titre de la carte" text="Texte de la carte" />
        </Default>
    );
}

export default Home;