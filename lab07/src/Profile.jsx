import "./Profile.css";
import React from "react";

export default function Profile({ name, image }){

    return (
        <section className="profile">
            <h2>{name}</h2>
            <img src={image} />
        </section>
    );
}