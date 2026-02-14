export default function Section7() {
  return (
    <section className="panel h-dvh relative overflow-hidden bg-bg">
      <div className="w-full h-full content">
        <video
          autoPlay
          muted
          playsInline
          loop
          src="https://cdn.flipperzero.one/busybar_interval_busy_desktop_008.mp4"
          className="object-cover"
        ></video>
        <div className="max-w-2xl flex flex-col gap-4 top-1/4 absolute left-1/2 -translate-x-1/2">
          <div className="text-6xl ">Interval focus timer</div>

          <div className="font-normal ">
            BUSY Bar is an advanced productivity timer inspired by the Pomodoro
            technique, which divides work into short intervals — 25-minute work
            sessions followed by 5-minute breaks.
          </div>
        </div>
      </div>
    </section>
  );
}
