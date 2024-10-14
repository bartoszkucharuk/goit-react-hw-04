import React from 'react'
import Character from "./Character";


export default function CharactersList({ characters }) {
    return (
        <div>
            {characters.map((char) => (
                <Character key={char.id} name={char.name} />
            ))}
        </div>
    );
} 