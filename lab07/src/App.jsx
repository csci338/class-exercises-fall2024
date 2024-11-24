import React from "react";
import Profile from "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";

const people = [
    { name: "Anita", picture: "https://picsum.photos/id/216/100/100" },
    { name: "Ben", picture: "https://picsum.photos/id/217/100/100" },
    { name: "Adwaina", picture: "https://picsum.photos/id/218/100/100" },
    { name: "Laciesha", picture: "https://picsum.photos/id/219/100/100" },
];

export default function App() {

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                {people.map((person) => (
                    <Profile
                        key={person.name}
                        name={person.name}
                        picture={person.picture}
                    />
                ))}
                <ButtonCount />
            </main>
        </>
    );
}