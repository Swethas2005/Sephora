import { useState, useEffect } from 'react';
import './ChosenSlider.css'; // Ensure this CSS is scoped to ChosenSlider


const slides = [
  {
    id: 1,
    imgSrc: "https://www.sephora.com/contentimages/promo/beautyoffers/2024/September/2024-9-4-glow-recipe-blackberry-serum-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480",
    text: "Free Glow Recipe Trial Size UpTarget blemishes and fine lines with the NEW, gentle Blackberry Retinol Blemish Serum.",
    text2: "Free with $30 purchase.Beauty Insider members only.",
    button:"Apply"
  },
  {
    id: 2,
    imgSrc: "https://www.sephora.com/contentimages/promo/beautyoffers/2024/September/2024-09-04-slotting-baar-site-beauty-offers-banner-1000x750-english-yttp-US-CAN-handoff.jpg?imwidth=480",
    text:'Auto-Replenish Hot Deal',
    text2: "Get 15% off¶ select Youth to the People subscription deliveries",
    button:"Apply"
  },
  {
    id: 3,
    imgSrc: "https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-09-03-q3-bonus-points-for-purchase-bundle-a-site-desktop-mobile-app-beauty-offers-page-banner-earn-us-can-final.jpg?imwidth=480",
    text: 'Earn 500 Extra Points‡',
    text2: "When you spend $75 in one transaction. ",
  },
  {
    id: 4,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/OhSnap/2024-march-oh-snap-site-desktop-mobile-app-beauty-offers-page-banner-generic-1000x750-us-2868.jpg?imwidth=480',
    text: 'Get 50% Off§§',
    text2: "Score can’t-miss deals on select beauty. New deals every day!",
  },
  {
    id: 5,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/September/2024-09-01-slotting-baar-site-beauty-offers-banner-1000x750-english-US-CAN-handoff.jpg?imwidth=480',
    text: 'Auto-Replenish Hot Deal ',
    text2: "Get 15% off¶ select Beautyblender subscription deliveries.",
  },
  {
    id: 6,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-08-27-slotting-baar-site-beauty-offers-banner-1000x750-english-US-CAN-handoff.jpg?imwidth=480',
    text: 'Auto-Replenish Hot Deal ',
    text2: "Get 15% off¶ select Benefit Cosmetics subscription deliveries.",
  },
  {
    id: 7,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-08-20-slotting-baar-site-beauty-offers-banner-1000x750-english-US-CAN-handoff.jpg?imwidth=480',
    text: 'Auto-Replenish Hot Deal.',
    text2: "Get 10% off¶ select Sol de Janeiro subscription deliveries"
  },
  {
    id: 8,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-8-20-august-hair-challenge-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480',
    text: "Free Ceremonia Samples ",
    text2: "Target damage, dryness, and split ends with gentle, guava-infused formulas."
  },
  {
    id: 9,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-8-20-vib-r-gifts-site-desktop-mobile-app-beauty-offers-page-banner-biossance-en-us.jpg?imwidth=480',
    text: 'Get a Biossance Gift',
    text2: "Target fine lines and texture with these bestselling formulas."
  },
  {
    id: 10,
    imgSrc: 'https://www.sephora.com/contentimages/promo/beautyoffers/2024/August/2024-aug-acne-mbc-site-desktop-mobile-app-beauty-offers-page-banner-1000x750-us-2821.jpg?imwidth=480',
    text: 'Choose 1 of 2 Skincare Trial Sizes',
    text2: "Find your new breakout-fighting fave. Use code CLEARSKIN."
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
    <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"15px",fontFamily:"helvetica",marginTop:"50px"}}>Beauty offers (20)</h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default ChosenSlider;
