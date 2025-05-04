import React from 'react'
import './CardWrapper.css';

export default function CardWrapper({ children }) {
    return (
        <div className="card-wrapper shadow p-4 mb-4 bg-white rounded">
            {children}
        </div>
    )
}

