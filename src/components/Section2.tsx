export default function Section2() {
  return (
    <section className="relative overflow-hidden h-dvh  panel bg-bg">
      <div className="content w-full h-full p-20">
        <video
          src="https://cdn.flipperzero.one/lekyb_desktop_004.mp4"
          autoPlay
          loop
          playsInline
          muted
          className="absolute w-[45%] right-0 top-0 pointer-events-none -z-1 "
        ></video>

        <div className="font-normal max-w-xl space-y-8 ">
          <div>
            <h1 className="text-6xl font-medium">Show you're BUSY</h1>
            <div className=" max-w-[50ch] mt-6">
              Stop others from interrupting your deep focus. The display shows
              you’re busy and when you’ll be free again.
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
                <div>Instant activation</div>
                <div className="text-fg-muted text-base mt-2">
                  Start and stop the BUSY status manually with a large button.
                  Works comple﻿tely offline, with no extra software required.
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
                <div>Instant activation</div>
                <div className="text-fg-muted text-base mt-2">
                  Start and stop the BUSY status manually with a large button.
                  Works comple﻿tely offline, with no extra software required.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
