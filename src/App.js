// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';
import AccessibilityButton from './components/AccessibilityButton';
import AnnouncementPopup from './components/AnnouncementPopup';

function App() {
  return (
    <div className='' dir="rtl">
      <Helmet>
        <title>שחר - מורה פרטי למדעי המחשב והנדסת תוכנה</title>
        <meta
          name="description"
          content="מורה פרטי למחשבים והנדסת תוכנה - שיעורים פרטיים בזום, עם דגש על פיתוח מיומנויות למידה עצמאית והכנה למבחנים."
        />
        <meta name="keywords" content="מורה פרטי, שיעורי מחשבים, הנדסת תוכנה, שיעורי זום, למידה עצמאית, תכנות" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <Hero />
      <AnnouncementPopup />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <AccessibilityButton/>
    </div>
  );
}

export default App;
