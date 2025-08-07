import { React, useState, useEffect } from "react";

const FirstSection = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center poppins-thin min-h-[100vh] 2xl:min-h-[90vh] ">
        <div className="text-center w-full max-w-6xl">
          {/* Title */}
          <h1 className="uppercase text-[#333333] text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl font-bold tracking-normal mb-12  drop-shadow-lg">
            Empowering Communities,
            <br />
            One Alert at a Time.
          </h1>

          {/* Gradient Cards */}
          <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-32 w-64 rounded-2xl border-1 border-[#F5F5F5] transition-transform transform hover:scale-105 duration-300"
              >
                {/* Optional content */}
              </div>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="text-3xl font-semibold uppercase flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
            {[
              {
                label: now.toLocaleString("en-US", { month: "long" }),
                value: now.toLocaleString("en-US", { day: "numeric" }),
              },
              {
                label: "Year",
                value: now.toLocaleString("en-US", { year: "numeric" }),
              },
              {
                label: now
                  .toLocaleTimeString("en-US", {
                    hour: "numeric",
                    hour12: true,
                  })
                  .split(" ")[1],
                value: now.getHours() % 12 || 12,
              },
              {
                label: "Minutes",
                value: now.toLocaleString("en-US", { minute: "2-digit" }),
              },
              {
                label: "Seconds",
                value: now.toLocaleString("en-US", { second: "2-digit" }),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 text-transparent bg-clip-text bg-gradient-to-br from-[#5B2232] to-[#A24D60]  rounded-xl px-6 py-5 shadow-lg w-32 sm:w-36 transition-all hover:scale-105 duration-300"
              >
                <span className="text-5xl font-bold">{item.value}</span>
                <span className="text-xl tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
