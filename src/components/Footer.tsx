import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  let footer_ref = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    gsap.from(footer_ref.current, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: footer_ref.current,
        start: "0% 100%",
        end: "100% 100%",
        scrub: true,
      },
    });
  });

  return (
    <footer
      className="bg-fg text-bg h-[50dvh] panel  flex items-center"
      ref={footer_ref}
    >
      <div className="content container flex gap-8 justify-between max-md:flex-col max-md:justify-start">
        <div>
          <img
            src="https://busy.bar/img/tild6135-6162-4462-b465-666261333463__flipper_logo.svg"
            alt=""
            className="w-72"
          />
          <div className="text-xs opacity-50 mt-4">
            <div>Designed by Flipper FZCO. </div>{" "}
            <div>© 2025. All rights reserved.</div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:gap-x-4  font-normal gap-x-12   gap-y-0 ">
          <a href="">Shop</a>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Downloads</a>
          <a href="">Contacts</a>
          <a href="">Privacy Policy</a>
        </div>

        <div>
          <div className="flex gap-6 items-center">
            <a href="">
              <img
                src="https://busy.bar/img/tild3033-6631-4139-b962-323439333961__instagram.svg"
                alt=""
                className="w-8"
              />
            </a>
            <a href="">
              <img
                src="https://busy.bar/img/tild3962-6366-4533-a437-666135383538__x.svg"
                alt=""
                className="w-8"
              />
            </a>
            <a href="">
              <img
                src="https://busy.bar/img/tild3866-3532-4665-a634-613333363765__tiktok.svg"
                alt=""
                className="w-8 p-1"
              />
            </a>
            <a href="">
              <img
                src="https://busy.bar/img/tild3565-3530-4162-b066-663533663232__youtube.svg"
                alt=""
                className="w-8"
              />
            </a>
          </div>
          <div className="text-xs opacity-50 mt-4">
            <div>Dubai Silicon Oasis, Dubai,</div>{" "}
            <div>United Arab Emirates</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
