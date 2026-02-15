export default function Sectin10() {
  return (
    <section className="panel  h-dvh overflow-hidden bg-[#f9f9f9] relative z-0">
      <div className="content w-full h-full  ">
        <video
          src="https://cdn.flipperzero.one/hm_desktop_11.mp4"
          autoPlay
          muted
          loop
          playsInline
          className=" absolute -right-1/4 h-full w-full object-cover -z-1 scale-111"
        ></video>
        <div className="container max-w-lg mx-0 py-[20dvh] pl-[5vw]">
          <div className="flex flex-col z-0 gap-8">
            <div className="text-6xl font-medium">Pause scrolling</div>

            <div className="font-normal ">
              Short videos on TikTok and Instagram flood you with dopamine,
              making it hard to focus. BUSY App can blocks these apps while
              you’re in deep focus.
            </div>
            <div className="flex gap-4 items-start">
              <img
                src="https://busy.bar/img/tild3933-3134-4565-b465-333862326364__group_6.svg"
                alt=""
                className="w-8"
              />
              <div className="flex flex-col gap-2">
                <div>Block any app</div>
                <div className="text-sm text-fg-muted">
                  Select the apps you want to block during focus mode. You’ll
                  stop receiving notifications and won’t be able to open these
                  apps until the timer runs out.
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img
                src="https://busy.bar/img/tild3835-6236-4265-b638-613235323933__subtract.svg"
                alt=""
                className="w-8"
              />
              <div className="flex flex-col gap-2">
                <div>Hardcore mode (optional)</div>
                <div className="text-sm text-fg-muted">
                  Locks apps for the entire focus session with no way to bypass
                  it. The only way to unlock them is a full phone reset.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
