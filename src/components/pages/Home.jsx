import React from "react";
import Default from "../templates/Default";
import Card from "../atoms/Card/Card";

const Home = () => {
    return (
        <Default >
            <Card bg-color="red" title="Titre de la carte" text="Texte de la carte" />
        </Default>
    );
}

export default Home;