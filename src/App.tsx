import { useEffect } from "react";
import Landing from "./pages/Landing";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  useEffect(() => {
    let lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
    //
  }, []);

  useEffect(() => {
    let videos = document.querySelectorAll("video");

    let observers: IntersectionObserver[] = [];

    videos.forEach((vid) => {
      let obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) vid.play();
          else vid.pause();
        },
        { threshold: 0.2 },
      );
      obs.observe(vid);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);
  return (
    <body className="bg-bg text-fg text-xl font-medium">
      <Landing />
    </body>
  );
}
