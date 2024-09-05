import { useState, useEffect } from 'react';
import './NewArrivals.css'; // Ensure this CSS is scoped to ChosenSlider


const slides = [
    
  {
    id: 1,
    imgSrc: "https://www.sephora.com/productimages/sku/s2792489-main-zoom.jpg?imwidth=332",
    text: "Rare Beauty by Selena Gomez",
    text2: "Soft Pinch Liquid Blush",
    text3: "$14.00-$24.00",
    views: "11.5k",
    rating: 5 
  },
  {
    id: 2,
    imgSrc: "https://www.sephora.com/productimages/sku/s2792489-main-zoom.jpg?imwidth=332",
    text:'Rare Beauty by Selena Gomez',
    text2: "Mini Soft Pinch Liquid Blush",
    text3: "$14.00",
    views: "368",
    rating: 4 
  },
  {
    id: 3,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2796274-main-zoom.jpg?imwidth=332',
    text: 'Glow Recipes',
    text2: "Get Glowing With Me™ Kit by Katie Fang with Hue ",
    text3: "$30.00",
    views: "229",
    rating: 5
  },
  {
    id: 4,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2796514-main-zoom.jpg?imwidth=332',
    text: 'Sol de Janeiro',
    text2: "Mini Cheirosa 76 Perfume ",
    text3: "$25.00",
    views: "3",
    rating: 4
  },
  {
    id: 5,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2767457-main-zoom.jpg?imwidth=332',
    text: 'Gisou',
    text2: "Honey Infused Hydrating Lip Oil",
    text3: "$28.00",
    views: "2.5k",
    rating: 4 
  },
  {
    id: 6,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2788925-main-zoom.jpg?imwidth=332',
    text: 'dae',
    text2: "Cactus Fruit 3-in-1 Styling Cream with Taming Wand",
    text3: "$18.00",
    views: "3.6k",
    rating: 3 
  },
  {
    id: 7,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2800183-main-zoom.jpg?imwidth=332',
    text: 'Sephora Favorites',
    text2: "Perfume Sampler Set",
    text3: "$90.00",
    views: "1.85k",
    rating: 4
  },
  {
    id: 8,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2801520-main-zoom.jpg?imwidth=332',
    text: "Rare Beauty by Selena Gomez",
    text2: "Positive Light Liquid Luminizer Highlight",
    text3: "$16.00-$25.00",
    views: "2.9k",
    rating: 5 
  },
  {
    id: 9,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2771590-main-zoom.jpg?imwidth=332',
    text: 'Glossier',
    text2: "Balm Dotcom Lip Balm ",
    text3: "$16.00",
    views: "898",
    rating: 4 
  },
  {
    id: 10,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2742591-main-zoom.jpg?imwidth=332',
    text: 'GXVE BY GWEN STEFANI',
    text2: "Eye See in Color Clean Multidimensional Eyeshadow Palette",
    text3: "$28.00",
    views: "299k",
    rating: 3
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
    <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"15px",fontFamily:"helvetica",marginTop:"50px"}}>New Arrivals</h1>
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
