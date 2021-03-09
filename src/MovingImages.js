import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './MovingImages.css'

function MovingImages() {
  return (
    <div className="movingImages">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/Feb/GW/BAU/D20657235_WL_VIVO_BAU_Feb_2021_DesktopTallHero_1500x600._CB660203354_.jpg" alt=""/>
      </AliceCarousel>
    </div>
  );
}

export default MovingImages;
