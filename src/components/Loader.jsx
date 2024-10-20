import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.loader}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#252d91"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
        </div>
    );
}
