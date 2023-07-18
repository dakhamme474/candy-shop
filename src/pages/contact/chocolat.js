import React from "react";
import { useState } from "react";

import choco from "../../assets/images/chocolat/choco.jpg";
import choco2 from "../../assets/images/chocolat/choco2.jpg";
import choco3 from "../../assets/images/chocolat/choco3.jpg";
import choco4 from "../../assets/images/chocolat/choco4.jpg";
import choco5 from "../../assets/images/chocolat/choco5.jpg";
import choco6 from "../../assets/images/chocolat/choco6.jpg";
import choco7 from "../../assets/images/chocolat/choco7.jpg";
import choco8 from "../../assets/images/chocolat/choco8.jpg";



export const Chocolat = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const shopNowHandler = (productName) => {
    setCartItems((prevCartItems) => [...prevCartItems, productName]);
  };


  return (
    <>
      <button href="" className="panier" onClick={openModal}>PANIER ({cartItems.length})</button>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco2} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco3} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco4} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco5} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco6} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco7} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={choco8} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHOCOLAT</h5>
            <p class="text-center">40-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHOCOLAT")}>shop now</a>
          </div>
        </div>
      </div>


      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>x</span>
            <h2 class="text-center">Produits dans le panier :</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li class="text-center fs-4 " key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
