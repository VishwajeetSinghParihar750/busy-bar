import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Seciton8() {
  useGSAP(() => {
    //
  });
  return (
    <section className="py-20">
      <div className="container ">
        <div className="flex mt-8 ">
          <div className="max-w-3xl flex gap-2 mx-auto">
            <div className="flex flex-col gap-4">
              <div className="text-6xl ">New Pomodoro timer</div>

              <div className="font-normal ">
                We’ve redesigned the classic Pomodoro timer by combining it with
                a distraction blocker to help you stay focused and fight off
                notifications, social media, and other brain rot while you work.
              </div>
            </div>
            <img
              src="https://busy.bar/img/tild3466-3361-4137-b564-623133613331__pomodoro-icon.svg"
              alt=""
              className="w-32"
            />
          </div>
        </div>
        <div className="relative h-100">
          <img
            src="https://busy.bar/img/tild6434-6339-4937-b861-383234333863__what-is-pomodoro-tim.svg"
            alt="1"
            className="w-full mt-20 animate-[images-switch_8s_linear_infinite] absolute h-84"
          />
          <img
            src="https://busy.bar/img/tild3432-6530-4936-a431-316533623038__what-is-pomodoro-tim.svg"
            alt="2"
            className="w-full mt-20 animate-[images-switch_8s_linear_infinite_2s] absolute h-84"
          />
          <img
            src="https://busy.bar/img/tild6163-6165-4231-b130-646238303732__what-is-pomodoro-tim.svg"
            alt="3"
            className="w-full mt-20 animate-[images-switch_8s_linear_infinite_4s] absolute h-84"
          />
          <img
            src="https://busy.bar/img/tild3337-3761-4561-a436-633466333238__what-is-pomodoro-tim.svg"
            alt="4"
            className="w-full mt-20 animate-[images-switch_8s_linear_infinite_6s] absolute h-84"
          />
        </div>
        <div className="max-w-2xl mt-16 mx-auto">
          <div className="text-4xl">We fight major focus killers</div>
          <div className="flex gap-20 mt-12">
            <div className="flex flex-col gap-4">
              <img
                src="https://busy.bar/img/tild3335-6139-4331-b563-646535353466__ill1.jpg"
                alt=""
                className="h-52 object-contain"
              />

              <div className="flex gap-2 flex-col">
                <div className="text-2xl font-normal">Endless scrolling</div>
                <div className="text-fg-muted text-sm">
                  Brain-rotting content kills your focus. We block Instagram and
                  TikTok while you’re in focus mode — so you can’t even open
                  them.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="https://busy.bar/img/tild3734-3336-4965-a538-623964346632__ill-2.svg"
                alt=""
                className="h-52"
              />

              <div className="flex gap-2 flex-col">
                <div className="text-2xl font-normal">People around</div>
                <div className="text-fg-muted text-sm">
                  Just as you manage to concentrate, someone always tries to
                  interrupt. BUSY Bar lets others know when you’re in deep focus
                  — and when you’ll be available again.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
