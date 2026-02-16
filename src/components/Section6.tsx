import BlockReveal from "./gsap/BlockReveal";

export default function Section6() {
  return (
    <section className="panel relative z-0 overflow-hidden bg-bg">
      <div className="content h-dvh ">
        <img
          src="https://busy.bar/img/tild3534-6462-4236-a536-643034396661__busy_reardisplay_des.svg"
          alt=""
          className="object-cover object-center absolute inset-0 w-full h-full -z-1 scale-111"
        />
        <div className="max-w-3xl mx-auto flex flex-col gap-4 pt-[calc(100dvh/8)]">
          <div className="text-6xl">
            <BlockReveal>Monochrome back screen</BlockReveal>
          </div>

          <div className="font-normal max-w-2xl">
            <BlockReveal>
              Eye-friendly back screen allows you to control the device and see
              the status displayed on the main screen — even when it's turned away
              from you.
            </BlockReveal>
          </div>
        </div>
      </div>
    </section>
  );
}