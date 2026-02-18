import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export type TextEffect1Handle = {
  play: () => void;
  reverse: () => void;
};
type Props = {
  children: React.ReactNode;
  ref: React.Ref<TextEffect1Handle>;
};

export default function TextEffect1({ ref, children }: Props) {
  let container = useRef<HTMLSpanElement | null>(null);

  let top_text = useRef<HTMLSpanElement | null>(null);
  let bottom_text = useRef<HTMLSpanElement | null>(null);

  let timeline = useRef<gsap.core.Timeline>(null);

  useGSAP(
    async () => {
      //
      if (!top_text.current || !bottom_text.current) return;
      await document.fonts.ready;
      //
      let tl1 = gsap.timeline({ paused: true });
      timeline.current = tl1;

      let split_word1 = new SplitText(top_text.current, {
        type: "chars",
      });
      let split_word2 = new SplitText(bottom_text.current, {
        type: "chars",
      });

      tl1
        .to(
          split_word1.chars,
          {
            yPercent: -100,
            stagger: 0.01,
            duration: 0.3,
            ease: "power4.inOut",
          },
          0,
        )
        .to(
          split_word2.chars,
          {
            //
            yPercent: -100,
            stagger: 0.01,
            duration: 0.3,
            ease: "power4.inOut",
          },
          0,
        );

      return () => {
        split_word1.revert();
        split_word2.revert();
      };
    },
    { scope: container },
  );

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        timeline.current?.play();
      },
      reverse: () => {
        timeline.current?.reverse();
      },
    }),
    [ref, timeline],
  );

  return (
    <span ref={container} className="overflow-hidden relative">
      <span ref={top_text}>{children}</span>
      <span
        ref={bottom_text}
        className="absolute inset-0 top-full w-full h-full"
      >
        {children}
      </span>
    </span>
  );
}
