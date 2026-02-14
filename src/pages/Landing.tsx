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
    let panels = gsap.utils.toArray<HTMLElement>(".panel");
    let content = gsap.utils.toArray<HTMLElement>(".content");

    panels.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "100% 100%",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    });
    content.forEach((el, ind) => {
      if (ind == panels.length - 1) {
        //footer
      } else {
        gsap.to(el, {
          scale: 0.95,
          opacity: 0.5,
          scrollTrigger: {
            trigger: panels[ind],
            start: "100% 100%",
            end: "+=100%",
            scrub: true,
          },
        });
      }
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
