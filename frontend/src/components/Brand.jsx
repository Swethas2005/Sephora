import React from 'react';
import './Brand.css'; // Ensure the CSS file path is correct

const Brand = () => {
  const slides = [
    {
      id: 1,
      imgSrc1: "https://www.sephora.com/contentimages/2024-9-2-laneige-new-bouncy-and-firm-skincare-collection-site-desktop-mobile-home-page-rwd-marketing-banner-800x534-en-us-can.png?imwidth=800",
      text: 'New from LANEIGE',
      text2: 'Visibly plump and firm skin with the Bouncy + Firm lineup. Only at Sephora.',
      text3: 'SHOP NOW ▸',
      textColor: 'black',
      backgroundColor: '#eebdc3',
    },
    {
      id: 2,
      imgSrc1: 'https://www.sephora.com/contentimages/2024-9-3-dyson-chitosan-site-desktop-mobile-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800',
      text: 'New from Dyson',
      text2: 'Meet the Chitosan lineup: Lock in your look with formulas for every hair type.',
      text3: 'SHOP NOW ▸',
      textColor: 'white',
      backgroundColor: '#4e445d',
    },
    {
      id: 3,
      imgSrc1: "https://www.sephora.com/contentimages/2024-9-2-tatcha-dewy-skin-site-desktop-mobile-home-page-events-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800",
      text: 'Tatcha Events',
      text2: 'Get a trial-size moisturizer when you stop in store⁠—no purchase necessary.*',
      text3: 'FIND A STORE NEAR YOU ▸',
      textColor: 'white',
      backgroundColor: '#6b4e91',
    },
  ];

  return (
    <div className="image-container-wrapper">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className="image-container-slide"
          style={{ color: slide.textColor }}
        >
          <div className="image-container-images">
            <img src={slide.imgSrc1} alt={`Slide ${index} - 1`} className="image-one" />
          </div>
          <div 
            className="text-container"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <div className="inner-text">
              <h2>{slide.text}</h2>
              <h3>{slide.text2}</h3>
              <p>{slide.text3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
