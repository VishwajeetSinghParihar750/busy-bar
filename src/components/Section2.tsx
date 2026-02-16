import BlockReveal from "./gsap/BlockReveal";

export default function Section2() {
  return (
    <section className="relative overflow-hidden h-dvh panel bg-bg">
      <div className="content w-full h-full p-20">
        <video
          src="https://cdn.flipperzero.one/lekyb_desktop_004.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="absolute w-[40%] right-0 top-0 pointer-events-none scale-130 -z-1"
        ></video>

        <div className="font-normal max-w-xl space-y-8">
          <div>
            <h1 className="text-6xl font-medium">
              <BlockReveal>Show you're BUSY</BlockReveal>
            </h1>
            <div className="max-w-[50ch] mt-6">
              <BlockReveal>
                Stop others from interrupting your deep focus. The display shows
                you're busy and when you'll be free again.
              </BlockReveal>
            </div>
          </div>

          <div>
            <div className="flex items-end">
              <img
                src="https://busy.bar/img/tild3462-3862-4838-a131-613261623063__icon_instant_activat.png"
                alt=""
                className="max-w-32 mr-4"
              />
              <div>
                <div>
                  <BlockReveal>Instant activation</BlockReveal>
                </div>
                <div className="text-fg-muted text-base mt-2">
                  <BlockReveal>
                    Start and stop the BUSY status manually with a large button.
                    Works completely offline, with no extra software required.
                  </BlockReveal>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-end">
              <img
                src="https://busy.bar/img/tild3834-3335-4834-b937-633436316135__icon_set_timer.png"
                alt=""
                className="max-w-32 mr-4"
              />
              <div>
                <div>
                  <BlockReveal>Set timer</BlockReveal>
                </div>
                <div className="text-fg-muted text-base mt-2">
                  <BlockReveal>
                    Set a timer for how long you want to be in BUSY mode. The
                    display will automatically turn off when the timer ends.
                  </BlockReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
