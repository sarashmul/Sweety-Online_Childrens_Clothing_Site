import React from 'react'
import './CategoryCard.css'

export default function CategoryCard({ category,onClick }) {
  return (
    <div className="card text-bg-dark" style={{ width: '25rem', cursor: 'pointer' }} onClick={onClick}>
      <img src={category.img} className="card-img" alt={category.name} />
      <div className="card-img-overlay d-flex flex-column justify-content-end">
      <h5 className="card-title text-center text-white fs-2">{category.name}</h5>
      <button type="button" className="btn btn-light">למעבר לקולקציה</button>
      </div>
    </div>
   
  )
}
