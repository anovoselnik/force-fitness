import styles from "./price-list.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { NextArrow, PrevArrow } from "../shared/arrows";

const prices = [
  {
    name: "Mjesečna članarina",
    price: 200,
    texts: [
      "Neograničeno korištenje svih prostorija fitnes centra bez najave, unutar mjesec dana.",
      "FORCE BASIC program po želji uz demonstraciju i objašnjenje od strane trenera za postizanje kvalitetnijih rezultata.",
      "Stručan tekst o prehani na mail, kako bi brže ostvarili svoj cilj.",
      "*Cijena sa popustom za učenike , studente i umirovljenike je 220 kn, odnosno 200 kn ako se dolazi do 16h. Cijena bez popusta je 250kn.",
    ],
  },
  {
    name: "Mjesečna superior članarina",
    price: 500,
    texts: [
      "Individualni trening sa trenerom i izrada individualnog programa, uz rezervaciju termina i trenera.",
      "Neograničeno korištenje svih prostorija fitness centra bez najave unutar mjesec dana.",
      "Savjetovanje o prehrani.",
      "Stručan tekst o prehrani i primjeri jelovnika za specifične potrebe.",
      "*Cijena bez popusta za učenike, studente i umirovljenike je 550kn.",
    ],
  },
  {
    name: "Grupni treninzi",
    price: 280,
    texts: [
      "12 treninga unutar mjesec dana",
      "Mogućnost neograničenog korištenja teretane neograničeno",
      "Stručan tekst o prehrani i primjeri jelovnika",
      "Podrška i savjetovanje o prehrani",
      "*Cijena vođenih treninga (do 6 žena) je 300kn.",
    ],
  },
  {
    name: "Individualni treninzi",
    price: 1520,
    texts: [
      "Treninzi 1 na 1 sa trenerom unutar mjesec dana.",
      "Mjesečna članarina.",
      "Stručan tekst o prehrani i primjer jelovnika.",
      "Tjedno praćenje prehrane i korekcija od strane trenera.",
      "Podrška i savjetovanje o prehrani.",
      "*Cijena se odnosi na treninge koji su 2x tjedno (8 treninga mjesečno).",
    ],
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
                  <ul className={styles.texts}>
                    {texts.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
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
