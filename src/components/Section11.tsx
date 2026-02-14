export default function Sectin10() {
  return (
    <section className="panel relative h-dvh overflow-hidden z-0 bg-bg">
      <div className="content w-full h-full relative ">
        <video
          src="https://cdn.flipperzero.one/mute_all_devices_desktop_002.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover object-[50%_30%] h-full w-full -z-1"
        ></video>
        <div className="z-0 flex flex-col gap-8 container mx-0 max-w-lg  my-[10dvh] ml-[10vw]">
          <div className="text-6xl font-medium">Mute all devices</div>
          <div className="font-normal flex flex-col gap-4">
            <div>
              BUSY Bar integrates with the free cloud-based BUSY App
              infrastructure.
            </div>
            <div>
              Block distractions across all platforms simultaneously, so nothing
              pulls you away while you’re focused. BUSY App works on your
              computer, phone, and smartwatch.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
