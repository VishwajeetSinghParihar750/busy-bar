import type { ReactNode } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  stagger?: number;
};

export default function BlockReveal({
  children,
  delay = 0,
  stagger = 0.1,
}: Props) {
  let container = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    async () => {
      //

      if (!container.current) return;

      await document.fonts.ready;
      //
      let lines: Element[] = [];
      let blocks: Element[] = [];

      let text_split = new SplitText(container.current, {
        type: "lines",
      });

      text_split.lines.forEach((line) => {
        line.classList.add("w-fit");

        const wrapper = document.createElement("span");
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        wrapper.className = "relative z-0 w-fit block";

        const block = document.createElement("span");
        line.classList.add("relative");
        line.classList.add("z-0");

        block.className =
          " will-change-transform absolute inset-0 top-[1px]  bg-brand z-1";

        wrapper.appendChild(block);

        lines.push(line);
        blocks.push(block);
      });

      gsap.set(lines, {
        opacity: 0,
      });
      gsap.set(blocks, {
        transformOrigin: "left center",
        scaleX: 0,
      });

      lines.forEach((line, ind) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            once: true,
          },
        });

        tl.to(blocks[ind], {
          scaleX: 1,
          duration: 0.5,
          delay: delay + stagger * ind,
          ease: "expo.inOut",
        });

        tl.set(blocks[ind], {
          transformOrigin: "right center",
        });
        tl.set(line, { opacity: 1 });

        tl.to(blocks[ind], {
          scaleX: 0,
          duration: 0.5,
          ease: "expo.inOut",
        });
      });

      return () => {
        text_split.revert();
      };
    },
    { scope: container, dependencies: [container.current] },
  );

  return <span ref={container}>{children}</span>;
}
