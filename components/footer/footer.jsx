import styles from "./footer.module.css";
import classnames from "classnames";

const days = [
  {
    day: "Ponedjeljak",
    time: "08:00 - 22:00",
  },
  {
    day: "Utorak",
    time: "08:00 - 22:00",
  },
  {
    day: "Srijeda",
    time: "08:00 - 22:00",
  },
  {
    day: "Četvrtak",
    time: "08:00 - 22:00",
  },
  {
    day: "Petak",
    time: "08:00 - 22:00",
  },
  {
    day: "Subota",
    time: "10:00 - 17:00",
  },
  {
    day: "Nedjelja",
    time: "NE RADIMO",
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <h1 className="text-center">TU SMO ZA VAS</h1>
      <div className="row">
        <div className="col-md-3">
          <div>
            <h3>KONTAKT</h3>
            <p>
              Ul. Ferde Rusana <br /> 10, 43000, Bjelovar
            </p>
            <a
              className={classnames(styles.email, "mt-3")}
              href="tel:+385981645261"
            >
              098 164 52 61
            </a>
            <br />
            <a className={styles.email} href="mailto:info@fc-force.hr">
              info@fc-force.hr
            </a>
          </div>
          <div>
            <h3 className="mt-5">RADNO VRIJEME</h3>
            <ul className={styles.workingHours}>
              {days.map(({ day, time }) => (
                <li key={day}>
                  <span>{day}</span>
                  <span className={styles.hours}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-9 pl-45">
          <iframe
            src="https://snazzymaps.com/embed/419796"
            width="100%"
            height="600px"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
);
