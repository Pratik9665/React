import React from "react";

const Brownbackground = () => {
  return (
    <div
       className="
        relative flex flex-col items-center text-center
        bg-repeat moving-bg overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://www.brcjobs.com/wp-content/uploads/2020/05/landing-users.jpg')",
        backgroundSize: "550px auto ",
      }}
    >
      <div className="absolute inset-0 bg-amber-900/85"></div>
      <div className="relative flex flex-col mt-15 items-center ">

        <div className="bg-white p-2  mb-5">
          <img
            className="h-16"
            src="https://alumni.jnec.org/assets/images/LogoMGM.svg"
            alt="JNEC Logo"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-normal text-white leading-tight">
          Jawaharlal Nehru <br />
          Engineering College Alumni
        </h1>

        <p className="text-white/90 text-sm md:text-sm mt-6 max-w-2xl leading-relaxed">
          Jawaharlal Nehru Engineering College is a premier institute of engineering <br />
          that has carved a niche for itself in the field of technical education <br />
          in a very short span of time.
        </p>

        <div className="flex gap-6 mt-8 flex-wrap justify-center">
          <button className="bg-white text-amber-900 font-medium px-10 md:px-16 py-3 text-sm rounded shadow-lg hover:bg-gray-200 transition duration-300">
            Login
          </button>

          <button className="text-white font-medium px-10 md:px-16 py-3 rounded shadow-lg text-sm border-2 border-white hover:bg-white hover:text-amber-900 transition duration-300">
            Register
          </button>
        </div>

      </div>
      <div className="w-[72
      %]">
<img
        src="https://alumni.jnec.org/assets/images/group-bottom.webp"
        alt="Students"
        className="relative z-10 w-full mt-8.5"
      />      </div>
    </div>
  );
};

export default Brownbackground;