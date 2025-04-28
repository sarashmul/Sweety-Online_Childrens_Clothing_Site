import React from 'react'

export default function CategoryCard({ category,onClick }) {
  return (
    <div className="card text-bg-dark" style={{ width: '18rem', cursor: 'pointer' }} onClick={onClick}>
      <img src="https://via.placeholder.com/300x200" className="card-img" alt={category} />
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h5 className="card-title">{category}</h5>
        <button type="button" className="btn btn-outline-secondary">למעבר לקולקציה</button>
      </div>
    </div>
   
  )
}
