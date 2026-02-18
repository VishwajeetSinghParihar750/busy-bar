import { useRef } from "react";
import BlockReveal from "./gsap/BlockReveal";
import TextEffect1 from "./gsap/TextEffect1";
import type { TextEffect1Handle } from "./gsap/TextEffect1";

export default function Hero() {
  let hero_div = useRef<HTMLDivElement | null>(null);

  let text_effect_handle_ref = useRef<TextEffect1Handle>(null);

  return (
    <div
      className="h-dvh w-full  bg-bg relative overflow-hidden panel z-0"
      ref={hero_div}
    >
      <div className="content h-full w-full ">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] -z-1 scale-111"
          loop
          muted
          autoPlay
          playsInline
          src="https://cdn.flipperzero.one/BusyBar_First_Block_Video_Desktop_02.mp4"
        ></video>
        <div className="">
          <nav className="container ">
            <div className="flex justify-between items-center py-4  ">
              <div className="flex items-center text-fg-muted bg-transparent ">
                <img
                  src="https://busy.bar/img/tild3337-6635-4334-b034-373537636162__navlogo_busy_bar.svg"
                  alt=""
                ></img>

                {/* <ul className="flex gap-6 ml-10">
                  <li className={activeSection == 0 ? "text-fg" : ""}>Home</li>
                  <li>Shop</li>
                  <li>Downloads</li>
                  <li>Blog</li>
                </ul> */}
              </div>
              <img
                src="https://busy.bar/img/tild3164-6239-4836-b439-363839316536__badge_red.svg"
                className="w-40"
              />
            </div>
          </nav>
          <section className="absolute top-[25dvh] left-1/2 -translate-x-1/2 w-full z-0 ">
            <div className="mt-[30vh]  text-2xl overflow-hidden ">
              <p className="mx-auto w-fit">
                <BlockReveal>
                  <span className="font-bold">BUSY Bar </span> is a productivity
                  multi-tool device with an LED pixel display. <br />
                  Focus timer with distraction blocking feature on your phone
                  and PC. <br />
                  Fully customizable, open-source, and smart home ready.
                </BlockReveal>
              </p>
            </div>
            <button
              onMouseEnter={(e) => {
                text_effect_handle_ref?.current?.play();
              }}
              onMouseLeave={() => {
                text_effect_handle_ref.current?.reverse();
              }}
              className="bg-brand block relative overflow-hidden  text-bg font-medium hover:bg-fg cursor-pointer rounded-lg mx-auto mt-12  text-xl py-5 px-12  "
            >
              <div className="overflow-hidden  relative flex justify-center font-bold">
                <TextEffect1 ref={text_effect_handle_ref}>
                  PRE-ORDER
                </TextEffect1>
              </div>
            </button>
          </section>
        </div>
        {/* <div
        className="absolute inset-0 bg-linear-to-b 
                  from-black/30 via-black/5 to-black/30 -z-1 pointer-events-none"
      /> */}
      </div>
    </div>
  );
}
