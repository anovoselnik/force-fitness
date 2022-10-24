import styles from "./team.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { NextArrow, PrevArrow } from "../shared/arrows";

const team = [
  {
    name: "Branislava Musulin",
    job: "Trener",
    image: "branislava.png",
    desc: "Pomažem majkama da postignu bolju formu od one koju su imale prije trudnoće, uz pomoć MamaFit programa koji traje maksimalno 12 tjedana!",
  },
  {
    name: "Matija Kocijan",
    job: "Trener",
    image: "matija.png",
    desc: "Pomažem ženama 20-50 godina da smršave do 12 kilograma za 12 tjedana uz pomoć svog jedinstvenog transformacijskog programa.",
  },
  {
    name: "Ivan Starčević",
    job: "Trener",
    image: "ivan.png",
    desc: "Pomažem ljudima da se oporave od ozljeda koštano-mišićno-zglobnog sustava, kroz treninge kineziterapije i rehabilitacije.",
  },
  {
    name: "Milan Musulin",
    job: "Trener",
    image: "milan.png",
    desc: "Pomažem ženama i muškarcima da izgrade kvalitetnu mišićnu masu i snagu, kroz jedinstvene BootyBuilding i FORCE FITNESS programe.",
  },
];

export const Team = () => (
  <section className={styles.team}>
    <div className="container">
      <div className="row">
        <h1 className={classnames("text-center", "heading", styles.heading)}>
          NAŠ TIM
        </h1>
      </div>
      <div className="row">
        <div className="col">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            autoplay={true}
            slidesToShow={4}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            responsive={[
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 3,
                },
              },
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
            {team.map(({ name, job, image, desc }, i) => (
              <div className={styles.cardContainer} key={name}>
                <div
                  className={classnames(styles.card, {
                    [styles.green]: i % 2,
                  })}
                >
                  <img
                    className={styles.image}
                    src={`./img/${image}`}
                    alt={`${name} - ${desc}`}
                  />
                  <h3 className="text-center">{name}</h3>
                  <h4 className="text-center">{job}</h4>
                  <p className={styles.paragraph}>{desc}</p>
                  {/* <button className={classnames("btn-primary", styles.btn)}>
                    Više
                  </button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
);
