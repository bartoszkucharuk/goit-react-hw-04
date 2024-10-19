import React from 'react'

export default function ImageCard({ data }) {
    return (
        <div>
            <img src={data.urls.small} alt={ data.description }/>
            <p>{ data.description || "no photo description" }</p>
        </div>
    );
}
