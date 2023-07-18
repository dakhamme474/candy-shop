import React from "react";
import { useState } from "react";

import candy1 from "../../assets/images/candy-collection/candy1.jpg";
import candy2 from "../../assets/images/candy-collection/candy2.jpg";
import candy3 from "../../assets/images/candy-collection/candy3.jpg";
import candy4 from "../../assets/images/candy-collection/candy4.jpg";
import candy5 from "../../assets/images/candy-collection/candy5.jpg";
import candy6 from "../../assets/images/candy-collection/candy6.jpg";
import candy7 from "../../assets/images/candy-collection/candy7.jpg";
import candy8 from "../../assets/images/candy-collection/candy8.jpg";

export const Candy = () => {
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
          <div className="parent-img"><img src={candy1} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">NERDS</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("NERDS")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy2} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">SOUR PUNSH</h5>
            <p class="text-center">15-MAD</p>
            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("SOUR PUNSH")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy3} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">AIR HEADS</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("AIR HEADS")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy4} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">BLUE MIX</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("BLUE MIX")}>shop now</a>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy5} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">NERDS GUMMY</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("NERDS GUMMMY")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy6} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">SMART</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("SMART")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy7} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">ROCK</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("ROCK")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy8} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">CHEWY</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("CHEWY")}>shop now</a>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy1} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">Candy collection</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("Candy collection")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy2} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">drink collection</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("Candy collection")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy3} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">chocolat collection</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("Candy collection")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={candy4} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">chocolat collection</h5>
            <p class="text-center">15-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("Candy collection")}>shop now</a>
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
