import React from 'react';

export default function SearchBar({getImage}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const { inputValue } = form.elements;
        console.log(inputValue.value); // tu powinien znajdować sie call do API

        if (inputValue.value.trim() === "") {
            console.log("Please enter text to search image!");
            return;
        };

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
        </header>
    );
}
