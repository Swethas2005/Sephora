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
    imgSrc: "https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332",
    text:'MILK MAKEUP',
    text2: "Cooling Water Jelly Tint Lip + Cheek Blush Stain",
    text3: "$24.00",
    views: "1.5k",
    rating: 4 
  },
  {
    id: 3,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2264638-main-zoom.jpg?imwidth=332',
    text: 'Benefits Cosmetics',
    text2: "Benetint Liquid Lip + Cheek Blush Stain ",
    text3: "$30.00",
    views: "4.9k",
    rating: 5
  },
  {
    id: 4,
    imgSrc: 'https://www.sephora.com/productimages/sku/s1393693-main-zoom.jpg?imwidth=332',
    text: 'Sol de Janeiro',
    text2: "Mini Cheirosa 76 Perfume ",
    text3: "$25.00",
    views: "3",
    rating: 4
  },
  {
    id: 5,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2767457-main-zoom.jpg?imwidth=332',
    text: 'Urban Decay ',
    text2: "24/7 Glide-On Waterproof Eyeliner Pencil",
    text3: "$23.00",
    views: "2.5k",
    rating: 5 
  },
  {
    id: 6,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?imwidth=332',
    text: 'Summer Fridays',
    text2: "Lip Butter Balm for Hydration & Shine",
    text3: "$24.00",
    views: "3.6k",
    rating: 5
  },
  {
    id: 7,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2495547-main-zoom.jpg?imwidth=332',
    text: 'Sephora Favorites',
    text2: "Perfume Sampler Set",
    text3: "$90.00",
    views: "1.85k",
    rating: 4
  },
  {
    id: 8,
    imgSrc: 'https://www.sephora.com/productimages/sku/s1201474-main-zoom.jpg?imwidth=332',
    text: "Rare Beauty by Selena Gomez",
    text2: "Positive Light Liquid Luminizer Highlight",
    text3: "$16.00-$25.00",
    views: "2.9k",
    rating: 4
  },
  {
    id: 9,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=332',
    text: 'Glossier',
    text2: "Balm Dotcom Lip Balm ",
    text3: "$16.00",
    views: "898",
    rating: 4 
  },
  {
    id: 10,
    imgSrc: 'https://www.sephora.com/productimages/sku/s2490704-main-zoom.jpg?imwidth=332',
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
    <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"15px",fontFamily:"helvetica",marginTop:"50px"}}>Your Trending Picks</h1>
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
