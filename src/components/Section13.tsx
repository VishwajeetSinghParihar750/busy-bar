export default function Section13() {
  return (
    <section className="py-20 panel bg-bg">
      <div className="content container flex gap-20 flex-col ">
        <div className="flex gap-20 ">
          <img
            src="https://busy.bar/img/tild3934-3761-4230-b532-313865383533__pic_matter_logo.svg"
            alt=""
            className="flex-3 rounded-4xl overflow-hidden"
          />
          <div className="flex-4     gap-4 flex flex-col self-center">
            <div className="text-4xl">What is Matter protocol?</div>
            <div className="font-normal">
              Matter is a modern smart home protocol developed by Apple, Google,
              Amazon, and Samsung to address the issue of smart device
              incompatibility and security. Designed for seamless
              interoperability, Matter ensures that supported devices can easily
              integrate into all major smart home platforms without the need for
              additional apps or software.
            </div>
            <div className="text-sm text-fg-muted font-normal">
              We are a member of the Connectivity Standards Alliance (CSA-IoT),
              and our products are currently in the process of being certified
              to work with the Matter standard.
            </div>
          </div>
        </div>

        <div className="flex gap-20 ">
          <div className="flex-4     gap-4 flex flex-col self-center">
            <div className="text-4xl">Home Assistant support</div>
            <div className="font-normal">
              BUSY Bar can be natively integrated into Home Assistant via its
              HTTP API, serving as an automation trigger when you’re busy. It
              can also act as an output device triggered by actions from Home
              Assistant, such as displaying a message when your wash﻿ing machine
              has finished its cycle.
            </div>
            <div className="text-sm text-fg-muted font-normal">
              Home Assistant is the most popular open-source smart home hub,
              with a wide range of integrations, powerful automation, and local
              control.
            </div>
            <img
              src="https://busy.bar/img/tild6633-3538-4565-b631-646332363633__image_1.png"
              alt=""
              className="w-72 mt-4"
            />
          </div>
          <img
            src="https://busy.bar/img/tild3236-3465-4565-a365-383433386136__pic_device_smarthome.svg"
            alt=""
            className="flex-3 rounded-4xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
