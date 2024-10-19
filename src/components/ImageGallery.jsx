import React from 'react'
import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";



export default function ImageList({ frames }) {
    return (
        <ul className={styles.gallery}>
            {frames.map((img) => (
                <li className={styles.item} key={img.id}>
                    <ImageCard data={img} />
                </li>
            ))}
        </ul>
    );
} 