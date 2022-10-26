/** @format */

import styles from "./price-list.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { NextArrow, PrevArrow } from "../shared/arrows";

const prices = [
  {
    name: "Mjesečna članarina neograničeno",
    price: 250,
  },
  {
    name: "Mjesečna članarina 2 mjeseca",
    price: 450,
  },
  {
    name: "Studenska, učenička i umirovljenička članarina",
    price: 220,
  },
  {
    name: "Studenska, učenička i umirovljenička članarina do 16h",
    price: 200,
  },
  {
    name: "1 trening",
    price: 40,
  },
  {
    name: "Mjesečna obiteljska članarina (2 osobe)",
    price: 450,
  },
  {
    name: "Mjesečna obiteljska članarina (3 osobe)",
    price: 630,
  },
  {
    name: "Mjesečna obiteljska članarina (4 osobe)",
    price: 730,
  },
  {
    name: "Grupni treninzi",
    price: 280,
  },
  {
    name: "Vođeni treninzi",
    price: 300,
  },
  {
    name: "'Fit Kid' grupa",
    price: 250,
  },
  {
    name: "12 polu-privatnih treninga (2 osobe)",
    price: 2700,
  },
  {
    name: "12 polu-privatnih treninga (3 osobe)",
    price: 3100,
  },
  {
    name: "12 privatnih treninga u mjesecu",
    price: 1800,
  },
  {
    name: "8 privatnih treninga u mjesecu",
    price: 1520,
  },
  {
    name: "Kineziterapija (12 treninga)",
    price: 2100,
  },
  {
    name: "1 privatni trening",
    price: 300,
  },
  {
    name: "Godišnja članarina (12 mjeseci)",
    price: 2400,
  },
  {
    name: "Polu-godišnja članarina (6 mjeseci)",
    price: 1300,
  },
  {
    name: "Najam ormarića mjesčno",
    price: 40,
  },
  {
    name: "Izgubljen ključ od ormarića",
    price: 100,
  },
  {
    name: "Najam ručnika (dan)",
    price: 20,
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
                  <div className={styles.price}>{price} kn</div>
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
