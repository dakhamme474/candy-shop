import React from "react";

import  candy  from "../../assets/images/candy.jpg";
import  chocolat  from "../../assets/images/chocolat.jpg";
import  soda  from "../../assets/images/soda.jpg";


export const Home = () => {
  return (
    <>
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src={candy} className="images-choco" alt="" />
    </div>
    <div className="carousel-item">
      <img className="images-choco" src={candy} alt="" />
    </div>
    <div className="carousel-item">
      <img src={candy} className="images-choco" alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};
