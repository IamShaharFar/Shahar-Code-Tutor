import React from 'react';

function Benefits() {
    return (
      <section className="benefits">
        <h2>יתרונות השיעורים</h2>
        <ul>
          <li><FontAwesomeIcon icon={faBook} /> פיתוח מיומנויות למידה עצמאית</li>
          <li><FontAwesomeIcon icon={faLaptop} /> עזרה בעבודות הגשה</li>
          <li><FontAwesomeIcon icon={faClock} /> הכנה מותאמת אישית למבחנים</li>
          <li><FontAwesomeIcon icon={faUsers} /> הנחות לשיעורים בקבוצות</li>
        </ul>
      </section>
    );
  }

export default Benefits;