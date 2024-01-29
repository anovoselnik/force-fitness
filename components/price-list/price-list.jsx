/** @format */

import styles from "./price-list.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { NextArrow, PrevArrow } from "../shared/arrows";

const prices = [
  {
    name: "Mjesečna članarina neograničeno",
    price: 38,
  },
  {
    name: "Mjesečna članarina 3 mjeseca",
    price: 102,
  },
  {
    name: "Studenska, učenička i umirovljenička članarina",
    price: 34,
  },
  {
    name: "Studenska, učenička i umirovljenička članarina do 16h",
    price: 30,
  },
  {
    name: "1 trening",
    price: 5,
  },
  {
    name: "Mjesečna obiteljska članarina (2 osobe)",
    price: 68,
  },
  {
    name: "Mjesečna obiteljska članarina (3 osobe)",
    price: 96,
  },
  {
    name: "Mjesečna obiteljska članarina (4 osobe)",
    price: 108,
  },
  {
    name: "Grupni treninzi",
    price: 45,
  },
  {
    name: "Grupni treninzi 3 mjeseca",
    price: 120,
  },
  {
    name: "Vođeni treninzi",
    price: 50,
  },
  {
    name: "Vođeni treninzi 3 mjeseca",
    price: 135,
  },
  {
    name: "TFF 3 mjeseca",
    price: 289,
  },
  {
    name: "TFF 2 mjeseca",
    price: 227,
  },
  {
    name: "Mama fit 3 mjeseca",
    price: 600,
  },
  {
    name: "12 polu-privatnih treninga (2 osobe)",
    price: 360,
  },
  {
    name: "12 polu-privatnih treninga (3 osobe)",
    price: 415,
  },
  {
    name: "12 privatnih treninga u mjesecu",
    price: 250,
  },
  {
    name: "8 privatnih treninga u mjesecu",
    price: 240,
  },
  {
    name: "Kineziterapija (12 treninga)",
    price: 280,
  },
  {
    name: "1 privatni trening",
    price: 40,
  },
  {
    name: "Godišnja članarina (12 mjeseci)",
    price: 360,
  },
  {
    name: "Polu-godišnja članarina (6 mjeseci)",
    price: 190,
  },
  {
    name: "Najam ormarića mjesečno",
    price: 6,
  },
  {
    name: "Izgubljen ključ od ormarića",
    price: 15,
  },
  {
    name: "Najam ručnika (dan)",
    price: 3,
  },
];

export const PriceList = () => (
  <section className={styles.priceList}>
    <div className="container">
      <div className="row">
        <h1 className={classnames("text-center", "heading", styles.heading)}>
          Treniraj s nama
        </h1>
      </div>
      <div className="row">
        <div className="col">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            autoplay={true}
            slidesToShow={3}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {prices.map(({ name, price, texts }) => (
              <div className={styles.cardContainer} key={name}>
                <div className={styles.card}>
                  <h3 className="text-center">{name}</h3>
                  <div className={styles.price}>{price} &euro;</div>
                  {/* Provjeri da li imaš texts */}
                  {!!texts && (
                    <ul className={styles.texts}>
                      {texts.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  )}
                  {/* <div className={styles.btnWrapper}>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdaQPVeKb1_TX_BqMWsS1Tw6IFvvST5FU7djDv1uO_IqYj1kA/viewform?vc=0&c=0&w=1&flr=0"
                      target="blank"
                      className={classnames("btn-primary", styles.btn)}
                    >
                      Postani član
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
);
