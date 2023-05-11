import React from "react";
import { Link } from "react-router-dom";
import "./Anasayfa.css";

const Anasayfa = () => {

  return (
    <div className="anasayfa-container">
      <h1 className="anasayfa-heading">Teknolojik Yemekler</h1>
      <p className="anasayfa-subheading">
        KOD ACIKTIRIR <br />PIZZA DOYURUR
      </p>

      <div className="anasayfa-button-container">
        <Link to={"/siparis-ver"} className="button">
          Acıktım
        </Link>
      </div>

      <div className="anasayfa-image-container">
        <img
          src="Assets\adv-aseets\food-2.png"
          alt="yemek resmi"
          className="anasayfa-image"
        />
      </div>
    </div>
  );
};

export default Anasayfa;
