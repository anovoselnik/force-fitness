import styles from "./references.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { NextArrow, PrevArrow } from "../shared/arrows";

const references = [
  {
    name: "Adela Ušanović",
    profession: "dr. med.",
    text: "Najbolje opremljena teretana u gradu s dvoranom za grupne treninge! Prisutni treneri su uvijek pristupačni i reagiraju u slučaju pogrešnog izvođenja vježbi. Uz ugodnu i zabavnu atmosferu u fitness Force-u, treniranjem ćete doći do željenih rezultata.",
    img: "adela",
  },
  {
    name: "Andrea Lazić",
    profession: "Voditeljica",
    text: "Teretana FORCE- drugi naziv The Best. Jako složna, marljiva ekipa, odlična prijateljska atmosfera, sjajni savjeti i preporuke. Trenerica Brana je doktorica za najbolje 🍑🍑, uz njezine savjete, treninge, podršku i upornost sam ostvarila figuru kakvu sam željela. FORCE 💜💜💜",
    img: "andrea",
  },
  {
    name: "Tihana Valanović",
    profession: "Komercijalist",
    text: "Jedno od mjesta gdje je trenerima zaista stalo da vam pruže znanje, motivaciju i podršku. Bilo da radite individualno ili grupno rezultati su i više nego odlični. Sve pohvale!",
    img: "tihana",
  },
  {
    name: "Andrija Čorba",
    profession: "dr. med. dent.",
    text: "Super teretana, opremljena vrhunskim spravama. Parking lako dostupan. Sve je profesionalno, čisto i uredno. Srdačno, toplo i veselo osoblje, treneri i fizikalni terapeuti. Prostrano i prigodno za sve vrste treninga. Super je za individualne i vođene grupne treninge. Dolazim godinama i imam samo pohvale za ovu teretanu i osoblje.",
    img: "andrija",
  },
  {
    name: "Marko Babić",
    profession: "Magistar prometa",
    text: "U svom 25-godišnjem stažu po raznim teretanama i fitnes centrima nigdje se nisam osjećao tako dobro kao u fitnes centru Force. Prostor je fantastičan, pun je svjetla, prozračan, te jako čist što je meni dosta važno. Sprava i utega ima i za najzahtjevnije korisnike, a za stručni tim trenera i trenerice sve pohvale. Želim im puno uspjeha u radu i puno zadovoljnih klijenata kao što sam ja. Definitivno nastavljam gomilati svoj fitnes staž u ovoj vrhunskoj teretani :)",
    img: "marko",
  },
  {
    name: "David Gilanj",
    profession: "ekonomist",
    text: "U teretanu idem sa ciljem prevencije od povreda (igram nogomet u 3 HNL sjever), te održavanja tonusa mišića. Pri samom ulasku u teretanu dočekaju me ljubazni, mladi ljudi puni elana. Atmosfera u teretani i stanje trenažera je odlično. Preporučam svakome tko želi poboljšati stanje svog tijela i uma.",
    img: "david",
  },
];

export const References = () => (
  <section className={styles.references}>
    <div className="container">
      <div className="row">
        <h1 className={classnames("text-center", "heading", styles.heading)}>
          Iskustva
        </h1>
        <img className={styles.imgQuote} src="./img/quote.png" />
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
            {references.map(({ name, profession, text, img }) => (
              <div className={styles.quoteContainer} key={name}>
                <div className={styles.quote}>
                  <img
                    src={`./img/${img}.jpeg`}
                    alt={name + " - " + profession}
                  />
                  <p>{text}</p>
                  <h4>
                    {name}
                    <br />
                    <span>{profession}</span>
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
);
