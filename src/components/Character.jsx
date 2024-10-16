import React from 'react'

export default function Character({ data }) {
    return (
        <div>
            <img src={data.urls.small} />
            <p>{ data.description || "no photo description" }</p>
        </div>
    );
}
