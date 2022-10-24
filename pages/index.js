import { useCallback, useEffect, useRef, useState } from "react";
import { AboutUs } from "../components/about-us";
import { Banner } from "../components/banner";
import { PriceList } from "../components/price-list";
import { References } from "../components/references";
import { Team } from "../components/team";

const useElementInView = (onIntersecting) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const observer = useRef(null);

  const setRef = useCallback((node) => {
    if (ref.current) {
      observer.current?.unobserve(ref.current);
      observer.current = null;
    }

    if (node) {
      const config = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      }, config);
      observer.current.observe(node);
    }

    ref.current = node;
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    onIntersecting();
  }, [isIntersecting]);

  return { setRef };
};

export default function Home({ setActive }) {
  const { setRef: refAboutUs } = useElementInView(() => setActive("O nama"));
  const { setRef: refTeam } = useElementInView(() => setActive("Naš tim"));
  const { setRef: refPriceList } = useElementInView(() => setActive("Cijene"));
  const { setRef: refReferences } = useElementInView(() =>
    setActive("Reference")
  );
  return (
    <>
      <Banner />
      <div id="about-us" ref={refAboutUs}>
        <AboutUs />
      </div>
      <div id="team" ref={refTeam}>
        <Team />
      </div>
      <div id="price-list" ref={refPriceList}>
        <PriceList />
      </div>
      <div id="references" ref={refReferences}>
        <References />
      </div>
    </>
  );
}
