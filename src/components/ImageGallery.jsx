import React from 'react'
import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";



export default function ImageList({ frames, openModal }) {
    return (
        <ul className={styles.gallery}>
            {frames.map((img) => (
                <li className={styles.item} key={img.id}>
                    <ImageCard data={img} clickingImg={() => openModal(img)} />
                </li>
            ))}
        </ul>
    );
} 