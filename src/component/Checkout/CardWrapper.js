import React from 'react'


export default function CardWrapper({ children }) {
    return (
        <div className="card-wrapper shadow p-4 mb-4 bg-white rounded">
            {children}
        </div>
    )
}

