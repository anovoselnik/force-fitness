import { HighlightedLink } from "../shared/highlighted-link";
import styles from "./about-us.module.css";
import Slider from "react-slick";
import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import { NextArrow, PrevArrow } from "../shared/arrows";

const Image = ({ src, clickHandler }) => (
  <div className={styles.imageWrapper} onClick={clickHandler}>
    <div className={styles.imageHover}>
      <span className="absolute-center">+</span>
    </div>
    <img
      className={classnames(styles.sliderImage, "absolute-center")}
      src={`./img/${src}`}
    />
  </div>
);

const images = [
  75, 76, 77, 79, 79, 82, 83, 84, 85, 86, 88, 89, 90, 91, 95, 96, 99, 100, 101,
  102, 103, 107, 108, 109, 110, 111, 112, 113, 115, 119, 121, 122, 123, 125,
  127,
];

const GalleryImage = ({ src }) => (
  <img className={styles.galleryImage} src={`./img/${src}`} />
);

export const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const gallerySlider = useRef(null);

  const closeGallery = () => setCurrentImage(null);
  const onImageClick = (img) => {
    setCurrentImage(img);
  };

  useEffect(() => {
    if (!currentImage || !gallerySlider.current) return;
    gallerySlider.current.slickGoTo(currentImage);
  }, [currentImage]);

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 27:
          closeGallery();
          break;
        case 37:
          gallerySlider.current?.slickPrev();
          break;
        case 39:
          gallerySlider.current?.slickNext();
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section className={styles.aboutUs}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-45">
              <div className={styles.aboutImageWrapper}>
                <img
                  className={styles.aboutImage}
                  src="./img/img_3.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 pl-45">
              <h1 className="heading">FORCE FITNESS</h1>
              <p className={styles.paragraph}>
                Force fitness centar koncipiran je tako da zadovoljava potrebe i
                najiskusnijih vježbača, a uz pomoć naših <strong>BASIC</strong>{" "}
                programa uspješno pomažemo početnicima da naprave svoje prve
                korake ka transformaciji.
                <br />
                <br /> Unutar naših prostorija za vježbanje nalaze se sprave i
                rekviziti najkvalitetnijih svjetskih proizvođača poput Hammer
                Strenght-a, Precor-a, LifeFitness-a i dr. Također se možemo
                pohvaliti da smo najopremljeniji fitness centar u županiji koji
                ima i najstručniji tim.
                <br />
                <br />
                Svaki od naših trenera je kroz opsežnu praksu osnovao svoj
                jedinstveni program koji sprovodi kroz grupni i individualni rad
                sa ciljem da zadovolji specifičnie zahtjeve klijenata poput
                riješavanja problema viška kilograma, dobivanja na mišinoj masi,
                rehabilitaciji ozljeda i kroničnih bolova, te riješavanja
                problema i stanja nastalih kod žena nakon trudnoće i poroda.
                <br />
                <br />
                Force j.d.o.o osnovan je 2019. i od osnivanja kontinuirano
                proširuje svoj tim i povećava broj sadržaja koje nudi
              </p>
              <HighlightedLink href="o-nama" text="O nama" />
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-md-12 gallery-list">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={1}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                responsive={[
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ]}
              >
                {images.map((img, i) => (
                  <Image
                    key={img}
                    src={`Brana-${img}.jpg`}
                    clickHandler={() => onImageClick(i)}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {typeof currentImage === "number" && (
        <div className="gallery">
          <button className={styles.closeButton} onClick={closeGallery}>
            <img src="./img/x.svg" />
          </button>
          <Slider
            dots={false}
            infinite={true}
            autoplay={false}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            ref={gallerySlider}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {images.map((img) => (
              <GalleryImage key={img} src={`Brana-${img}.jpg`} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};
