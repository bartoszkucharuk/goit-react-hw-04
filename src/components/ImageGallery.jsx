import React from 'react'
import ImageCard from "./ImageCard";


export default function ImageList({ frames }) {
    return (
        <ul>
            {frames.map((img) => (
                <li key={img.id}>
                    <ImageCard data={img} />
                </li>
            ))}
        </ul>
    );
} 