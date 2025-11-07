import React from "react";

const screenshots = [
  { src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Comprehensive dashboard with real-time updates" },
  { src: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Easy-to-navigate patient records" },
  { src: "https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Streamlined billing and invoicing" },
];

const Screenshots = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">See ClinicPro in Action</h2>
        <p className="text-gray-500 mb-12">Intuitive design that your team will love</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((shot, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition">
              <img src={shot.src} alt={shot.caption} className="w-full h-64 object-cover" />
              <p className="p-4 text-gray-700">{shot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
