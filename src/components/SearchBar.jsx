import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";




export default function SearchBar({getImage}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const { inputValue } = form.elements;
        console.log(inputValue.value); // tu powinien znajdować sie call do API
// TOASTER ERROR MESSAGE BELOW
        if (inputValue.value.trim() === "") {
            toast.error("Please enter text to search image!");
            return;
        };
// END OF TOAST ERROR MESSAGE UNDER
        
        getImage(inputValue.value);
        form.reset();
    };

    return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button className={styles.button} type="submit">
                    <FiSearch className={styles.FiSearch} size={18} />
                </button>
         
                <input
                    className={styles.input}
                    type="text"
                    name="inputValue"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            <Toaster position="top-right" />
        </header>
    );
}
