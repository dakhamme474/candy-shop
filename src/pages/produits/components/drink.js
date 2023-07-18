import React from "react";
import { useState } from "react";

import drink1 from "../../../assets/images/drink-collection/drink2.jpg";
import drink2 from "../../../assets/images/drink-collection/drink3.jpg";
import drink3 from "../../../assets/images/drink-collection/drink4.jpg";
import drink4 from "../../../assets/images/drink-collection/drink5.jpg";
import drink5 from "../../../assets/images/drink-collection/drink6.jpg";
import drink6 from "../../../assets/images/drink-collection/drink7.jpg";
import drink7 from "../../../assets/images/drink-collection/drink8.jpg";
import drink8 from "../../../assets/images/drink-collection/drink1.jpg";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import energy1 from "../../../assets/images/enegy-collection/energy1.jpg";
import energy2 from "../../../assets/images/enegy-collection/energy2.jpg";
import energy3 from "../../../assets/images/enegy-collection/energy3.jpg";
import energy4 from "../../../assets/images/enegy-collection/energy4.jpg";
import energy5 from "../../../assets/images/enegy-collection/energy5.jpg";
import energy6 from "../../../assets/images/enegy-collection/energy6.jpg";
import energy7 from "../../../assets/images/enegy-collection/energy7.jpg";
import energy8 from "../../../assets/images/enegy-collection/energy8.jpg";

export const Drink = () => {
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

      <div className="drink-normal"><h1>Normal Drink</h1></div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink1} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">MOTHER</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("MOTHER")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink2} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">TONIC</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("TONIC")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink3} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">LONG DRINK</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("LONG DRINK")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink4} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">PINK DRINK</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("PINK DRINK")}>shop now</a>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink5} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center" onClick={() => shopNowHandler("ELEMENTS")}>ELEMENTS</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now ">shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink6} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">TONIC</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("TONIC")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink7} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">LONG DRINK</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("LONG DRINK")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={drink8} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">PINK DRINK</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("PINK DRINK")}>shop now</a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}

      <div className="drink-normal"><h1>energy Drink</h1></div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy1} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">ELEMENTS</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("ELEMENTS")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy2} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">LEMON</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("LEMON")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy3} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">GHOST</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("GHOST")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy4} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">OCEAN</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("OCEAN")}>shop now</a>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy5} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">MONSTER</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("MONSTER")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy6} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">DREAM</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("DREAM")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy7} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">HELL</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("HELL")}>shop now</a>
          </div>
        </div>
        <div class="card bg-white" >
          <div className="parent-img"><img src={energy8} className="candys" alt="" /></div>
          <div class="card-body d-flex justify-content-center flex-column">
            <h5 class="card-title text-center">DIFFERENT</h5>
            <p class="text-center">30-MAD</p>

            <a href="#" class="btn shop-now " onClick={() => shopNowHandler("DIFFERENT")}>shop now</a>
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