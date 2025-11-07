import React from "react";

const testimonials = [
  {
    quote: `"ClinicPro transformed how we run our veterinary practice. Appointment scheduling is seamless, and our staff loves how easy it is to access patient records. We've saved hours every week."`,
    name: "Dr. Sarah Mitchell",
    role: "Owner, Paws & Claws Veterinary Clinic",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote: `"The billing and medical aid claims features are game-changers. We get paid faster and spend less time on admin work. Our patients appreciate the professionalism too."`,
    name: "Dr. James Chen",
    role: "Dentist, Bright Smile Dental",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote: `"As a small practice, we needed something affordable but powerful. ClinicPro delivered on both. The support team has been fantastic, and our workflow is so much smoother."`,
    name: "Dr. Emily Rodriguez",
    role: "GP, Riverside Family Practice",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Trusted by Practices Everywhere</h2>
          <p className="text-gray-600 mt-2">See what our customers have to say</p>
        </div>
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <div className="mb-4 flex-1">
                <p className="text-gray-700 italic">"{t.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
