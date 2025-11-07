import React from "react";

const CTA = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-0 mb-4">Ready to Transform Your Practice?</h2>
        <p className="text-gray-0 mb-6">Start your 14-day free trial today. No credit card required.</p>
       <a
  href="#contact"
  className="inline-block bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
>
  Get Started Free
</a>

      </div>
    </section>
  );
};

export default CTA;
