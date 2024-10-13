import React from 'react'

export default function CharactersList({ characters }) {
    return (
        <div>
            {characters.map(character => <p key={character.id}>{character.name}</p>)}
        </div>
    );
}
