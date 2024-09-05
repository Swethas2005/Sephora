import { useState, useEffect } from 'react';
import './NewArrivals.css'; // Ensure this CSS is scoped to ChosenSlider

const slides = [
  {
    id: 1,
    imgSrc: "https://www.sephora.com/productimages/sku/s2546919-main-zoom.jpg?imwidth=332",
    text: "Kiehl's Since 1851",
    text2: "Creamy Eye Treatment with Avocado",
    text3: "100 points",
  },
  {
    id: 2,
    imgSrc: "https://www.sephora.com/productimages/sku/s2588200-main-zoom.jpg?pb=clean-at-sephora&imwidth=332",
    text: '54 Thrones',
    text2: "AFRICAN Beauty Butter- Intensive Dry Skin Treatment",
    text3: "100 points",
  },
  {
    id: 3,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2687184-main-zoom.jpg?imwidth=332',
    text: 'Anastasia Beverly Hills',
    text2: "Non-Sticky Clear Crystal Lip Gloss",
    text3: "100 points"
  },
  {
    id: 4,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2687200-main-zoom.jpg?pb=clean-at-sephora&imwidth=332',
    text: 'TULA Skincare',
    text2: "The Cult Classic Purifying Face Cleanser",
    text3: "100 points",
  },
  {
    id: 5,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2735371-main-zoom.jpg?imwidth=332',
    text: 'IT Cosmetics',
    text2: "Confidence in a Gel Cream Oil-Control Face Moisturizer",
    text3: "100 points",
  },
  {
    id: 6,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2750651-main-zoom.jpg?imwidth=332',
    text: 'Mizani',
    text2: "25 Miracle Milk Heat Protectant Leave-In Conditioner",
    text3: "100 points",
  },
  {
    id: 7,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2777076-main-zoom.jpg?imwidth=332',
    text: 'Moroccanoil',
    text2: "Moroccanoil Treatment Light Hair Oil for Fine Hair",
    text3: "100 points"
  },
  {
    id: 8,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2784882-main-zoom.jpg?imwidth=332',
    text: "Biossance",
    text2: "Squalane + Omega Repair Deep Hydration Moisturizer",
    text3: "100 points"
  },
  {
    id: 9,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2786580-main-zoom.jpg?imwidth=332',
    text: "BEAUTY INSIDER",
    text2: "Deco Beauty x Sephora Teddy Nail Art",
    text3: "100 points"
  },
  {
    id: 10,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2802536-main-zoom.jpg?imwidth=332',
    text: 'Lancôme',
    text2: "Cils Booster XL Super-Enhancing Mascara Primer",
    text3: "100 points"
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
      <h1 style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "15px", fontFamily: "helvetica", marginTop: "50px" }}>Beauty Insider Rewards <br /> <p style={{ fontSize: "13px", fontWeight: "lighter", fontFamily: "helvetica" }}>Sign in to redeem your points.</p></h1>
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
