export default function Section1() {
  return (
    <div className="bg-bg-muted panel">
      <section className="content container py-20">
        <div className="mx-auto grid grid-cols-4 max-xl:grid-cols-2 gap-6 text-fg-muted  container">
          <div className="flex gap-4 items-start">
            <img
              src="https://busy.bar/img/tild3134-3261-4465-a262-326661386161__tild3836-6364-4332-a.svg"
              alt=""
              className="max-w-20 "
            />
            <div className="flex flex-col ">
              <div>Productivity tool</div>

              <div className="text-sm">
                Distraction blocker, custom BUSY message, focus timer,
                cross-platform sync
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <img
              src="https://busy.bar/img/tild3239-6665-4231-b461-636338356631__tild6134-6163-4135-b.svg"
              alt=""
              className="max-w-20 "
            />
            <div className="flex flex-col">
              <div>Apps and integration</div>

              <div className="text-sm">
                App Library, connection to 3rd-party software, integrations with
                calendar events and calls
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <img
              src="https://busy.bar/img/tild3335-3631-4366-a333-396339346265__icon_smart_home.svg"
              alt=""
              className="max-w-20 "
            />
            <div className="flex flex-col">
              <div>Smart home support</div>

              <div className="text-sm">
                Distraction blocker, custom BUSY message, focus timer,
                cross-platform sync
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <img
              src="https://busy.bar/img/tild6536-3633-4738-b931-643335613034__ic_4.svg"
              alt=""
              className="max-w-20 "
            />
            <div className="flex flex-col">
              <div>Developer-friendly</div>

              <div className="text-sm">
                Open HTTP API, open-source SDK, Python / Go / JavaScript libs,
                MQTT, no vendor lock-in
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-32 ">
          <h1 className="text-6xl">Productivity multi-tool</h1>
          <img
            src="https://busy.bar/img/tild3064-3439-4439-b633-346432393930__bs.jpg"
            alt=""
            className="max-w-4xl mt-8"
          />
        </div>

        <div className="mt-12 grid grid-cols-31 gap-6">
          <div className="bg-bg rounded-2xl p-5  px-8  flex flex-col gap-2 col-span-10 shadow-lg ">
            <div className="flex items-center gap-2">
              <img
                src="https://busy.bar/img/tild3865-3130-4238-b432-636365633732__group_48096983.svg"
                alt=""
                className="max-w-8"
              />
              <span className="text-3xl font-normal">BUSY focus timer</span>
            </div>
            <div className="font-normal ">
              Pomodoro timer and distraction blocker for deep focus workflow
            </div>
            <div className="flex flex-col justify-around flex-1">
              <ul className="list-disc list-outside pl-5 text-sm text-fg-muted flex flex-col gap-1 marker:text-brand marker:text-sm">
                <li>Notification blocker on iPhone / Android</li>
                <li>Integration with 3rd-party apps</li>
                <li>Customizable BUSY automations</li>
                <li>Smart Home integration</li>
              </ul>
            </div>
          </div>
          <div className="bg-bg rounded-2xl p-5  px-8 flex flex-col gap-2 col-span-10 shadow-lg">
            <div className="flex items-center gap-2">
              <img
                src="https://busy.bar/img/tild6434-3666-4263-b932-323132636638__group_48096982.svg"
                alt=""
                className="max-w-8 rotate-10"
              />
              <span className="text-3xl font-normal">Custom status</span>
            </div>
            <div className="font-normal ">
              Design your own BUSY status message{" "}
            </div>
            <div className="flex flex-col justify-around flex-1">
              <ul className="list-disc list-outside pl-5  text-fg-muted flex flex-col gap-1 marker:text-brand marker:text-sm text-sm">
                <li>
                  Display LED status: choose from the library or create a custom
                  one
                </li>
                <li>Add a timer for focused work: simple or interval</li>
                <li>Auto-activation by microphone, camera, or app</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl  overflow-hidden  border border-gray-400 flex flex-col gap-2 col-span-11">
            <div className="bg-bg py-3 px-8  flex items-center gap-2 border-b border-gray-400 text-2xl">
              <span className="">{">_"}</span>
              <span className="font-normal">Developer-friendly</span>
            </div>
            <div className="pb-5 px-8 pt-2 text-xs font-normal font-jetbrains">
              <div>
                Developers can integrate BUSY Bar into any system using Open
                API{" "}
              </div>
              <div className="flex gap-4 mt-2 ">
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="mr-1">{">"}</span> Open HTTP API
                  </div>
                  <div>
                    <span className="mr-1">{">"}</span> Offline API (no internet
                    required)
                  </div>
                  <div>
                    <span className="mr-1">{">"}</span> USB Virtual LAN
                  </div>
                  <div>
                    <span className="mr-1">{">"}</span> Web interface over USB
                    and Wi-Fi
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="mr-1">{">"}</span> Libs for
                    Python/JavaScript/Go
                  </div>
                  <div>
                    <span className="mr-1">{">"}</span> Self-hosted cloud
                    control
                  </div>
                  <div>
                    <span className="mr-1">{">"}</span> Apps for macOS, iOS and
                    Android
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
