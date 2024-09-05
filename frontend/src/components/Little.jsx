import React from 'react';
import './Little.css'; // Make sure to create this CSS file

const SmallDiv = ({ text, imgSrc }) => {
  return (
    <div className="small-div">
      <div className="top-left-text">{text}</div>
      <img src={imgSrc} alt="Image" className="small-img" />
    </div>
  );
};

const Little = () => {
  // Sample data for the small divs
  const smallDivsData = [
    { text: 'Blush', imgSrc: 'https://www.sephora.com/contentimages/homepage/031524/tools@3x.png?imwidth=106' },
    { text: 'Serums', imgSrc: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106' },
    { text: 'Trending on Social', imgSrc: 'https://www.sephora.com/contentimages/homepage/010124/star%20trending.JPG?imwidth=106' },
    { text: 'Sales', imgSrc: 'https://www.sephora.com/contentimages/categorybanners/RWD/icons/sale%2032@3x.jpg?imwidth=106' },
    { text: 'Clean + Planet Aware at Sephora', imgSrc: 'https://www.sephora.com/contentimages/homepage/041624/cleanplanet.JPG?imwidth=106' },
    { text: 'Black Owned Brands', imgSrc: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BOB_us_rwd_slice.png?imwidth=106' },
    { text: 'Foundation', imgSrc: 'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=106' },
    { text: 'Gifts', imgSrc: 'https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=106' },
  ];

  return (
    <div className="container">
      <div className="text">Need a Little Guidance? <br />
      Check out what's popular now.</div>
      <div className="small-divs">
        {smallDivsData.map((item, index) => (
          <SmallDiv key={index} text={item.text} imgSrc={item.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default Little;
