export default function Section9() {
  return (
    <section className="panel h-dvh relative bg-bg">
      <div className="content h-full w-full overflow-hidden relative">
        <video
          src="https://cdn.flipperzero.one/busy_bar_bg_vid_desktop_2560_02.mp4"
          loop
          autoPlay
          playsInline
          muted
          className="absolute inset-0 -z-1 object-cover w-full h-full object-center"
        ></video>
        <div className="max-w-120 flex flex-col gap-4 top-1/6 absolute left-1/2 -translate-x-1/16 z-0 container">
          <div className="text-6xl font-medium">Block distractions</div>

          <div className="font-normal ">
            BUSY Bar can automatically mute notifications on your phone and PC
            when BUSY mode is activated. It helps you stay focused by blocking
            distractions as you work.
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="text-sm text-fg-muted">
              Requires BUSY App integration (available for free):
            </div>
            <div className="flex gap-4">
              <a href="">
                <img
                  src="https://busy.bar/img/tild3965-3430-4462-a332-626161323462__google-play-neutral.svg"
                  alt=""
                  className="w-36"
                />
              </a>
              <a href="">
                <img
                  src="https://busy.bar/img/tild6236-3266-4234-a339-323830663033__app-store-neutral.svg"
                  alt=""
                  className="w-36"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
