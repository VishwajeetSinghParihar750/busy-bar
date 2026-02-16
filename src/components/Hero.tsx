import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import BlockReveal from "./gsap/BlockReveal";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  let hero_div = useRef<HTMLDivElement | null>(null);

  let order_button = useRef<HTMLDivElement | null>(null);
  let order_button2 = useRef<HTMLDivElement | null>(null);

  let tl1_ref = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    async () => {
      //
      if (!order_button.current || !order_button2.current) return;
      await document.fonts.ready;
      //
      let tl1 = gsap.timeline({ paused: true });
      tl1_ref.current = tl1;

      let button_split_word = new SplitText(order_button.current, {
        type: "chars",
      });
      let button_split_word2 = new SplitText(order_button2.current, {
        type: "chars",
      });

      tl1
        .to(
          button_split_word.chars,
          {
            yPercent: -100,
            stagger: 0.01,
            ease: "power4.inOut",
          },
          0,
        )
        .to(
          button_split_word2.chars,
          {
            //
            yPercent: -100,
            stagger: 0.01,
            ease: "power4.inOut",
          },
          0,
        );

      return () => {
        button_split_word.revert();
        button_split_word2.revert();
      };
    },
    { scope: hero_div },
  );

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
                tl1_ref.current?.play();
              }}
              onMouseLeave={() => {
                tl1_ref.current?.reverse();
              }}
              className="bg-brand block relative overflow-hidden  text-bg font-medium hover:bg-fg cursor-pointer rounded-lg mx-auto mt-12  text-xl py-5 px-12  "
            >
              <div className="overflow-hidden h-6 w-40 relative flex justify-center font-bold">
                <div ref={order_button} className="absolute inset-0">
                  PRE-ORDER
                </div>
                <div ref={order_button2} className="absolute top-full">
                  PRE-ORDER
                </div>
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
