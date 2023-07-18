import React from "react";

import  candy  from "../../assets/images/candy.jpg";
import  chocolat  from "../../assets/images/chocolat.jpg";
import  soda  from "../../assets/images/soda.jpg";
import  candycoll  from "../../assets/images/candycoll.jpg";
import drinkcoll from "../../assets/images/drinkcoll.jpg";
import chocolatcoll from "../../assets/images/chocolatcoll.jpg";


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

<div className="card-1">
<div class="card bg-white" >
  <div className="parent-img"><img src={candycoll} className="candys" alt="" /></div>
  <div class="card-body d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">Candy collection</h5>
    <a href="#" class="btn shop-now mt-1">preview</a>
  </div>
</div>
<div class="card bg-white" >
  <div className="parent-img"><img src={drinkcoll} className="candys" alt="" /></div>
  <div class="card-body d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">drink collection</h5>
    <a href="#" class="btn shop-now mt-1">preview</a>
  </div>
</div>
<div class="card bg-white" >
  <div className="parent-img"><img src={chocolatcoll} className="candys" alt="" /></div>
  <div class="card-body d-flex justify-content-center flex-column">
    <h5 class="card-title text-center">chocolat collection</h5>
    <a href="#" class="btn shop-now mt-1">preview</a>
  </div>
</div>
</div>

    </>
  );
};
