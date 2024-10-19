import React from 'react';
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({getImage}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const { inputValue } = form.elements;
        console.log(inputValue.value); // tu powinien znajdować sie call do API
// INSERT ERROR MESSAGE BELOW
        if (inputValue.value.trim() === "") {
            toast.error("Please enter text to search image!");
            return;
        };
// END OF ERROR MESSAGE UNDER
        
        getImage(inputValue.value);
        form.reset();
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="inputValue"
                    autocomplete="off"
                    autoFocusplaceholder="Searchimages and photos"                    
                />
                <button type ="submit">Search</button>
            </form>
            <Toaster position="top-right" />
        </header>
    );
}
