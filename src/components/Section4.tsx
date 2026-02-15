export default function Section4() {
  return (
    <section className="bg-bg py-24  overflow-hidden panel ">
      <div className=" content ">
        <div className=" z-0 relative pb-32">
          <div className="container  z-0  ">
            <div className="text-center text-7xl font-normal">
              Automatic BUSY status
            </div>
            <div className="w-2/5 flex z-0 flex-col gap-12  relative py-24  overflow-x-visible ">
              <div className="font-normal">
                BUSY Bar integrates with{" "}
                <span className="text-brand border-b">desktop software</span>{" "}
                and automatically activates when you’re on a call, live on
                stream, recording audio, or when a certain program is active.
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-center">
                  <img
                    src="https://busy.bar/img/tild3461-3065-4034-b264-336135336365__ic_1st__9.svg"
                    alt=""
                    className="max-w-12 mr-4"
                  />
                  <div className="flex flex-col max-w-[45ch]">
                    <div className="font-normal">Automatic ON CALL status</div>
                    <div className="text-base text-fg-muted mt-1">
                      When the microphone is activated on your computer, BUSY
                      Bar will automatically display an ON CALL status.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://busy.bar/img/tild3534-3462-4563-b530-376533346266__ic_1st__8.svg"
                    alt=""
                    className="max-w-12 mr-4"
                  />
                  <div className="flex flex-col max-w-[45ch]">
                    <div className="font-normal ">Streaming mode</div>
                    <div className="text-base text-fg-muted mt-1">
                      When you’re streaming through any software like OBS (Open
                      Broadcaster Software), BUSY Bar will automatically turn
                      on.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://busy.bar/img/tild6430-3038-4638-b565-623435326532__group_698.svg"
                    alt=""
                    className="max-w-12 mr-4"
                  />
                  <div className="flex flex-col max-w-[45ch]">
                    <div className="font-normal">Multi-platform support</div>
                    <div className="text-base text-fg-muted mt-1">
                      Supports Windows, macOS, and Linux (coming soon).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mask-[linear-gradient(0deg,transparent,black_40%,black)] -z-1 w-screen absolute right-[-15%] top-[0%] py-24 h-full">
            <img
              src="https://busy.bar/img/tild6365-3563-4631-a532-353164356565__asao_desktop_2.jpg"
              alt=""
              className=" object-fill"
            />
          </div>
        </div>
        <div className="bg-bg-muted rounded-4xl container mt-20 h-200 font-normal overflow-hidden relative z-0">
          <div className="p-16 pb-0 ">
            <div className="text-5xl">Remote control over Wi-Fi</div>
            <div className="mt-4 max-w-[50ch]">
              Control BUSY Bar remotely over the internet. Place it on the wall
              or door and use the desktop app to automatically activate the BUSY
              status when you’re on calls.
            </div>
          </div>

          <video
            src="https://cdn.flipperzero.one/rc_desktop_5.mp4"
            className="-z-1 absolute object-center object-cover inset-0 w-full h-full"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>
      </div>
    </section>
  );
}
