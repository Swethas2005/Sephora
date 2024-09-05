import React from 'react';
import './Brand.css'; // Ensure the CSS file path is correct

const Brand = () => {
  const slides = [
    {
      id: 1,
      imgSrc1: "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-dei-release.jpg?imwidth=800",
      text: 'Diversity, Equity & Inclusion Our commitment to providing an inclusive beauty community.',
      text3: 'LEARN MORE ▸',
      textColor: 'black',
      backgroundColor: '#eeeeee',
    },
    {
      id: 2,
      imgSrc1: 'https://www.sephora.com/contentimages/homepage/010124/2024-seasonal-services-wedding-site-desktop-mobile-home-page-rwd-marketing-banner-all-services-800x534-us-2875-2000x2000.jpeg?imwidth=800',
      text: 'Wedding Beauty ServicesBig events coming up? Get your makeup, skincare, and waxing done.',
      text3: 'BOOK NOW ▸',
      textColor: 'black',
      backgroundColor: '#d6e7f7',
    },
    {
      id: 3,
      imgSrc1: "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-beauty-on-demand-release.jpg?imwidth=800",
      text: 'Beauty on Demand Fast and easy options that work for you. ',
      text3: 'LEARN MORE ▸',
      textColor: 'black',
      backgroundColor: '#bddcee',
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
