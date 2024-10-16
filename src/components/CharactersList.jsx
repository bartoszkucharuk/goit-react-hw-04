import React from 'react'
import Character from "./Character";


export default function CharactersList({ characters }) {
    return (
        <ul>
            {characters.map((char) => (
                <li key={char.id}>
                    <Character data={char} />
                </li>
            ))}
        </ul>
    );
} 