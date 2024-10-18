import React from 'react'
import ImageCard from "./ImageCard";


export default function ImageList({ characters }) {
    return (
        <ul>
            {characters.map((char) => (
                <li key={char.id}>
                    <ImageCard data={char} />
                </li>
            ))}
        </ul>
    );
} 