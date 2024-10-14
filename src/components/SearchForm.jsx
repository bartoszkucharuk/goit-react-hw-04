import React from 'react'

export default function SearchForm({getCharacter}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const { name } = form.elements;
        console.log(name.value); // tu powinien znajdować sie call do API
        getCharacter(name.value);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"></input>
            <button>Search</button>
        </form>
    );
}
