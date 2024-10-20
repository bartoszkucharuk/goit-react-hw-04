import React from 'react';
import styles from "./ImageCard.module.css";

export default function ImageCard({ data }) {
    return (
        <div className={styles.card}
        //onClick={() => setModalIsOpen(true)}>
        >
            <img className={styles.frame} src={data.urls.small} alt={ data.description } />
            <p>{ data.description || "no photo description" }</p>
        </div>
    );
}
