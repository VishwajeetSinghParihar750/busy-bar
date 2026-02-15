export default function Secion12() {
  return (
    <section className="panel bg-bg relative z-0 overflow-hidden">
      <div className="content z-0 h-dvh w-full py-[10dvh]   ">
        <img
          src="https://busy.bar/img/tild3738-3236-4435-b036-386131396163__busybar_smart_home_w.jpg"
          className="absolute inset-0 object-cover w-full h-full object-[50%_60%] -z-1 scale-111"
          alt=""
        />
        <div className="max-w-2xl container flex flex-col gap-8 ">
          <div className="text-6xl font-normal ">Smart home integration</div>
          <div className="font-normal flex flex-col gap-4 max-w-[59ch] ">
            <div>
              Make your smart home react when you’re busy: pause music, turn on
              lights, and lock the door with just one button.
            </div>
            <div className="">
              BUSY Bar supports Matter®, a modern smart home protocol that
              connects to Apple Home and Google Home.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
