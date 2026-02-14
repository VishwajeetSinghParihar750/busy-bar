import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  let activeSection = 0;

  let hero_text = useRef<HTMLDivElement | null>(null);
  let hero_div = useRef<HTMLDivElement | null>(null);
  let hero_video = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    let split_word = new SplitText(hero_text.current, { type: "words" });

    gsap.from(split_word.words, {
      opacity: 0.2,
      stagger: 0.08,
      onComplete: () => {
        hero_video.current?.play();
      },
    });
  });

  return (
    <div className="h-dvh  bg-bg relative overflow-hidden panel" ref={hero_div}>
      <div className="content">
        <nav className="container relative">
          <div className="flex justify-between items-center py-4 relative ">
            <div className="flex items-center text-fg-muted bg-transparent ">
              <img
                src="https://busy.bar/img/tild3337-6635-4334-b034-373537636162__navlogo_busy_bar.svg"
                alt=""
              ></img>

              <ul className="flex gap-6 ml-10">
                <li className={activeSection == 0 ? "text-fg" : ""}>Home</li>
                <li>Shop</li>
                <li>Downloads</li>
                <li>Blog</li>
              </ul>
            </div>
            <img
              src="https://busy.bar/img/tild3164-6239-4836-b439-363839316536__badge_red.svg"
              className="w-40"
            />
          </div>
        </nav>
        <section className="absolute top-[25dvh] left-1/2 -translate-x-1/2 w-full  ">
          <div className="mt-[30vh]  text-2xl " ref={hero_text}>
            <p className="mx-auto w-fit">
              <span className="font-bold">BUSY Bar </span> is a productivity
              multi-tool device with an LED pixel display.
            </p>
            <p className="mx-auto w-fit">
              Focus timer with distraction blocking feature on your phone and
              PC.
            </p>
            <p className="mx-auto w-fit">
              Fully customizable, open-source, and smart home ready.
            </p>
          </div>
          <button className="bg-brand block text-bg font-medium hover:bg-fg cursor-pointer rounded-lg mx-auto mt-12  text-xl py-5 px-12  ">
            PRE-ORDER
          </button>
        </section>
        <video
          ref={hero_video}
          className="absolute inset-0 top-0 h-dvh w-full object-cover object-[50%_20%] -z-1 "
          loop
          muted
          playsInline
          src="https://cdn.flipperzero.one/BusyBar_First_Block_Video_Desktop_02.mp4"
        ></video>
        {/* <div
        className="absolute inset-0 bg-linear-to-b 
                  from-black/30 via-black/5 to-black/30 -z-1 pointer-events-none"
      /> */}
      </div>
    </div>
  );
}
