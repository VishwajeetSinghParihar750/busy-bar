import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import Section10 from "../components/Section10";
import Section11 from "../components/Section11";
import Section12 from "../components/Section12";
import Section13 from "../components/Section13";
import Footer from "../components/Footer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const contents = gsap.utils.toArray<HTMLElement>(".content");

    panels.forEach((panel, i) => {
      const el = contents[i];
      if (!el) return;

      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        el,
        { scale: 1, opacity: 1 },
        {
          scale: 0.9,
          opacity: 0.9,
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  });

  return (
    <div className="">
      <Hero />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Footer />
    </div>
  );
}
