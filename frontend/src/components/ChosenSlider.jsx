import React, { useState, useEffect } from 'react';
import './ChosenSlider.css'; // Ensure this CSS is scoped to ChosenSlider


const slides = [
    
  {
    id: 1,
    imgSrc: "https://www.sephora.com/productimages/sku/s2207231-main-zoom.jpg?imwidth=332",
    text: "Gisou",
    text2: "Honey Infused Hydrating Lip Oil",
    text3: "$28.00",
    views: "1.4k",
    rating: 4 // Example rating
  },
  {
    id: 2,
    imgSrc: "https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332",
    text: 'Drunk Elephant',
    text2: "Lala Retro™ Nourishing Whipped Refillable Moisturizer",
    text3: "$64.00",
    views: "3.2k",
    rating: 5 // Example rating
  },
  {
    id: 3,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2264638-main-zoom.jpg?imwidth=332',
    text: 'MILK MAKEUP',
    text2: "Cooling Water Jelly Tint Lip + Cheek Blush Stain",
    text3: "$24.00",
    views: "2.5k",
    rating: 3 // Example rating
  },
  {
    id: 4,
    imgSrc: 'https://www.sephora.com/productimages/sku/s1785856-main-zoom.jpg?imwidth=332',
    text: 'Glow Recipe',
    text2: "Watermelon Glow Ultra-Fine Mist",
    text3: "$29.00",
    views: "4.7k",
    rating: 2 // Example rating
  },
  {
    id: 5,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2744696-main-zoom.jpg?imwidth=332',
    text: 'LANEIGE',
    text2: "Lip Glowy Balm",
    text3: "$19.00",
    views: "1.8k",
    rating: 1 // Example rating
  },
  {
    id: 6,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2569747-main-zoom.jpg?imwidth=332',
    text: 'Touchland',
    text2: "Power Mist Hydrating Hand Sanitizer",
    text3: "$10.00",
    views: "3.6k",
    rating: 4 // Example rating
  },
  {
    id: 7,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2771590-main-zoom.jpg?imwidth=332',
    text: 'Benefit Cosmetics',
    text2: "Benetint Liquid Lip + Cheek Blush Stain",
    text3: "$26.00",
    views: "2.1k",
    rating: 3 // Example rating
  },
  {
    id: 8,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2787562-main-zoom.jpg?imwidth=332',
    text: "Summer Fridays",
    text2: "Dream Lip Oil for Moisturizing Sheer Coverage",
    text3: "$26.00",
    views: "4.3k",
    rating: 5 // Example rating
  },
  {
    id: 9,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2748333-main-zoom.jpg?imwidth=332',
    text: 'Glossier',
    text2: "Balm Dotcom Lip Balm and Skin Salve",
    text3: "$16.00",
    views: "5.1k",
    rating: 4 // Example rating
  },
  {
    id: 10,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2750081-main-zoom.jpg?imwidth=332',
    text: 'Sol de Janeiro',
    text2: "Mini Cheirosa 59 Perfume Mist",
    text3: "$28.00",
    views: "2.9k",
    rating: 2 // Example rating
  }
];

const ChosenSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2000); // Adjust the delay (2000ms = 2 seconds) as needed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
   <div>
    <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"15px",fontFamily:"helvetica",marginTop:"50px"}}>Chosen For You</h1>
     <div className="chosen-slider-container">
      <div className="chosen-slider-wrapper">
        <div 
          className="chosen-slider" 
          style={{ transform: `translateX(-${currentIndex * 97}px)` }} // Adjust slide width + gap
        >
          {slides.map((slide) => (
            <div key={slide.id} className="chosen-slide">
              <img src={slide.imgSrc} alt={`Slide ${slide.id}`} />
              <div className="chosen-text-container">
                <h3 className="chosen-title">{slide.text}</h3>
                <p className="chosen-description">{slide.text2}</p>
                <span className="chosen-price">{slide.text3}</span>
                <div className="star-rating">
                  {'★'.repeat(slide.rating)}{'☆'.repeat(5 - slide.rating)}
                  <span className="views">{slide.views}</span>
                </div>
              </div>
              <div className="quicklook-tooltip">Quicklook</div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ChosenSlider;
