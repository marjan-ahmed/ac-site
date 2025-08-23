import { useState } from 'react';

export default function ACServicesComponent() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      image: "/ac-deep-clean-img.jpeg",
      title: "AC Deep Clean",
      description: "Comprehensive deep cleaning service for your air conditioning system. We thoroughly clean filters, coils, ducts, and internal components to ensure optimal performance.",
      color: "from-[#92D9E5] to-[#4FD1C7]"
    },
    {
      id: 2,
      image: "/ac-coil-img.jpeg",
      title: "AC Coil Repair",
      description: "Expert repair services for damaged or corroded AC coils. Our experienced technicians restore your coil's efficiency, fix leaks, and replace damaged sections.",
      color: "from-[#4FD1C7] to-[#38B2AC]"
    },
    {
      id: 3,
      image: "/ac-diagnosis-img.jpeg",
      title: "AC Diagnosis Service",
      description: "Professional diagnostic service to identify AC problems accurately. Our certified technicians use advanced tools and equipment to pinpoint issues.",
      color: "from-[#38B2AC] to-[#2C7A7B]"
    },
    {
      id: 4,
      image: "/ac-reselling.jpeg",
      title: "AC Reselling",
      description: "Quality pre-owned and refurbished air conditioning units at competitive prices. All units are thoroughly tested, serviced, and come with warranty coverage.",
      color: "from-[#92D9E5] to-[#68D391]"
    },
    {
      id: 5,
      image: "/full-ac-img.jpeg",
      title: "Full AC Repair",
      description: "Complete air conditioning repair service covering all components and systems. From compressor issues to electrical problems, refrigerant leaks to thermostat malfunctions.",
      color: "from-[#4FD1C7] to-[#92D9E5]"
    }
  ];

  return (
    <>
    <section id='services'>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-gray-50 py-8 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className=" mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block">
          Our AC Services
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#92D9E5] to-[#4FD1C7] rounded-full"></div>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Professional air conditioning services to keep your home cool and comfortable year-round
        </p>
      </div>

      {/* Services - Centered with 3 per row */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 max-w-[1200px] mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative w-full sm:w-90 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-56 object-cover rounded-t-2xl sm:rounded-t-3xl"
              loading="lazy"
            />
            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg`}>
              Service #{service.id}
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}

</div>
      <div className="w-full bg-gradient-to-r from-[#2e8795] to-[#73bbd9] py-12 px-6 shadow-2xl text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
    Need AC Service Today?
  </h2>
  <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
    Contact us now for fast, reliable, and professional air conditioning services
  </p>
  <div className="flex justify-center">
    <a
      href="https://wa.me/+923333474568"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#3bad65] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 text-base sm:text-lg md:text-lg"
    >
      WhatsApp Us
    </a>

  </div>
</div>
</section>

</>
  );
}