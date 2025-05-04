import React from 'react'
import CategorysGrid from '../Home/CategorysGrid';
import './HomePage.css'
export default function HomePage() {

  return (
    

    <div>
      <header className="text-white text-center custom-header">
     
      <div className="container">
        <h1>Header</h1>
        <p className="lead">כאן תהיה תמונה גדולה</p>
      </div>
    </header>


      <main class="container my-5">
        <CategorysGrid></CategorysGrid>
      </main>


     


    </div>
  )
}
