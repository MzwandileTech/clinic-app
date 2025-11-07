import React from "react";

const Hero = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Complete Practice Management for Modern Clinics
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Streamline appointments, billing, patient records, inventory, and medical aid claims—all in one powerful platform built for vets, dentists, and general practitioners.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#pricing"
              className="bg-blue-900 text-white px-9 py-4 rounded font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Start Free Trial
            </a>

            <a
              href="#features"
              className="border border-blue-900 text-blue-900 px-9 py-4 rounded font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Image slightly larger */}
        <div className="mx-auto max-w-2xl">
          <img
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Healthcare professional using ClinicPro on tablet"
            className="rounded shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
