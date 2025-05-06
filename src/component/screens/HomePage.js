// import React from 'react'
// import CategorysGrid from '../Home/CategorysGrid';
// import './HomePage.css'
// export default function HomePage() {

//   return (
    

//     <div>
//       <header className="text-white text-center custom-header">
     
//       <div className="container">
//         <h1>Header</h1>
//         <p className="lead">כאן תהיה תמונה גדולה</p>
//       </div>
//     </header>


//       <main class="container my-5">
//         <CategorysGrid></CategorysGrid>
//       </main>


     


//     </div>
//   )
// }



import React from 'react';
import CategorysGrid from '../Home/CategorysGrid';
import './HomePage.css';
import backgroundImg from './Image/background.png'; 

export default function HomePage() {
  return (
    <div className="homepage">
     
      
      {/* סליידר / תמונה גדולה */}
      <div className="hero-section">
        <img src={backgroundImg} alt="קולקציה חדשה" className="hero-image" />
        <div className="hero-text">קולקציית קיץ 2025 עכשיו באתר!</div>
      </div>

      {/* רשת קטגוריות */}
      <main className="container my-5">
        <h2 className="section-title">קטגוריות</h2>
        <CategorysGrid />
      </main>

      {/* אזור נוסף - מבצעים */}
      <section className="promo-section">
        <h2>מבצעים</h2>
        <div className="promo-boxes">
          <div className="promo-box">👕 3 חולצות ב-99 ₪</div>
          <div className="promo-box">👶 קולקציית בייבי חדשה</div>
          <div className="promo-box">🎁 קבלו 10% הנחה בהרשמה</div>
        </div>
      </section>

     
    </div>
  );
}