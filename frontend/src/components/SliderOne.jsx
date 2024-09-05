import React, { useEffect, useState } from 'react';
import './SliderOne.css'; 

const SliderOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://www.sephora.com/contentimages/2024-9-9-fenty-hair-site-app-home-page-rwd-hero-banner-1200x800en-us-can.jpg?imwidth=1090',
      text1: "New Fenty Hair by Rihanna",
      text2: "Multitasking formulas that nurture and hydrate hair of all types and textures.",
      bgColor: "#aab2d7",
      textColor: "#333333", 
      fontFamily:"helvetica",
      shop: "SHOP NOW ▸"
    },
    {
      image: 'https://www.sephora.com/contentimages/2024-aug-oh-snap-site-desktop-home-page-rwd-hero-banner-generic-1200x800-us-2833.jpg?imwidth=1090',
      text1: 'Today Only: 50% off Select Beauty',
      text2: 'Save big at Sephora and Sephora at Kohls until 9/19.',
      bgColor: "#a39ee0",
      textColor: "#FFFFFF",
      fontFamily:"helvetica", // Example text color
      shop: "SHOP NOW ▸"
    },
    {
      image: 'https://www.sephora.com/contentimages/2024-08-30-q3-bonus-points-for-purchase-bundle-a-site-desktop-home-page-rwd-hero-banner-earn-lws-us-can-final.jpg?imwidth=1090',
      text1: 'Earn 500 Extra Points‡',
      text2: 'When you spend $75 in one transaction. Use code GETPOINTS. Ends 9/6. Plus save up to 50%§§ on top beauty through 9/2.',
      bgColor: "#fe7e77",
      textColor: "#000000",
      fontFamily:"helvetica", // Example text color
      shop: "SHOP NOW ▸"
    },
    {
      image: 'https://www.sephora.com/contentimages/homepage/050124/2024-08-20-slotting-bestsellers-rwd-hero-banner-v2-g-k-s-k-US-CAN-handoff-updated.psd-slice-01-2000x2000.jpeg?imwidth=1090',
      text1: 'Bestselling Beauty',
      text2: 'These fan-favorites are worth the hype.',
      bgColor: "#0274cc",
      textColor: "#FFFFFF",
      fontFamily:"helvetica", // Example text color
      shop: "SHOP NOW ▸"
    },
    {
      image: 'https://www.sephora.com/contentimages/2024-aug-acne-mbc-site-home-page-RWD-hero-banner-spot-treatment-us-release.jpg?imwidth=1090',
      text1: 'Target Active Acne',
      text2: 'Spot treatments with powerful, fast-acting ingredients',
      bgColor: "#ecbde9",
      textColor: "#333333",
      fontFamily:"helvetica", // Example text color
      shop: "SHOP NOW ▸"
    },
    {
      image: 'https://www.sephora.com/contentimages/2024-8-15-glossier-boy-brow-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090',
      text1: 'Glossier Boy Brow Arch',
      text2: 'Shape, fill, and define with this NEW dual-tip pencil that wont smudge or fade',
      bgColor: "#f8dbe0",
      textColor: "#000000",
      fontFamily:"helvetica", // Example text color
      shop: "SHOP NOW ▸"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * (74.5 / slides.length)}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            <div className="text-div" style={{ backgroundColor: slide.bgColor }}>
              <div className="text-content" style={{ color: slide.textColor }}>{slide.text1}</div>
              <div className="text-content-2" style={{ color: slide.textColor }}>{slide.text2}</div>
              <div className="text-content-3 shop-link" style={{ color: slide.textColor }}>{slide.shop}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderOne;
