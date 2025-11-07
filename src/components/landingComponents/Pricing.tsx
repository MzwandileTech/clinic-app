import React from "react";

const plans = [
  {
    title: "Starter",
    price: "$49",
    period: "per month",
    features: [
      "Up to 2 practitioners",
      "500 appointments/month",
      "Patient records management",
      "Basic reporting",
      "Email support",
    ],
    btnType: "text",
  },
  {
    title: "Professional",
    price: "$99",
    period: "per month",
    features: [
      "Up to 5 practitioners",
      "Unlimited appointments",
      "Full records & billing",
      "Inventory management",
      "Medical aid claims",
      "Advanced analytics",
      "Priority support",
    ],
    btnType: "primary",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "per month",
    features: [
      "Unlimited practitioners",
      "Multiple locations",
      "Custom integrations",
      "Dedicated account manager",
      "Custom training",
      "24/7 phone support",
    ],
    btnType: "text-blue",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mt-2">Choose the plan that fits your practice</p>
        </div>

        {/* ✅ Made cards stretch horizontally */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl shadow p-10 flex flex-col transform transition duration-300 hover:scale-105 hover:border hover:border-blue-500 ${
                plan.featured ? "border-2 border-blue-600" : "bg-white"
              }`}
            >
              {/* ✅ Most Popular badge (green, centered on border) */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-center text-blue-900">
                  {plan.title}
                </h3>
                <div className="text-center mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>{" "}
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                {plan.btnType === "primary" && (
                  <button className="w-full py-3 px-6 rounded text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
                    Start Free Trial
                  </button>
                )}
                {plan.btnType === "text" && (
                  <button className="w-full py-3 px-6 rounded text-lg font-semibold text-gray-800 border border-gray-300 hover:bg-gray-100 transition">
                    Start Free Trial
                  </button>
                )}
                {plan.btnType === "text-blue" && (
                  <button className="w-full py-3 px-6 rounded text-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 transition">
                    Contact Sales
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
