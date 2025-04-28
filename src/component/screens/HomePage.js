import React from 'react'
import { useState } from 'react'
import CategoryCard from '../Home/CategoryCard'
import ProductsPage from './ProductsPage';
import CategorysGrid from '../Home/CategorysGrid';
export default function HomePage() {

  return (


    <div>
      <header class="bg-primary text-white text-center py-5">
        <div class="container">
          <h1> header</h1>
          <p class="lead">כאן יהיה תמונה גדולה</p>
        </div>
      </header>

      <main class="container my-5">
        <CategorysGrid></CategorysGrid>
      </main>


      <footer class="bg-light text-center py-4">
        <div class="container">
          <p class="mb-0">&copy; 2025 כל הזכויות שמורות</p>
        </div>
      </footer>



    </div>
  )
}
