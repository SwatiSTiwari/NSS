import React from 'react';

const events = [
  {
    id: 1,
    title: 'Annual Blood Donation Camp',
    date: 'October 15, 2024',
    description: 'Join us for our annual blood donation camp to contribute to saving lives and supporting local hospitals.',
  },
  {
    id: 2,
    title: 'Environmental Awareness Workshop',
    date: 'November 5, 2024',
    description: 'Participate in our workshop to learn about sustainable living and how you can contribute to environmental conservation.',
  },
  {
    id: 3,
    title: 'Rural Development Outreach',
    date: 'December 10, 2024',
    description: 'Be a part of our rural outreach program, where we conduct health camps and educational activities in adopted villages.',
  },
  {
    id: 4,
    title: 'Rural Development Outreach',
    date: 'December 10, 2024',
    description: 'Be a part of our rural outreach program, where we conduct health camps and educational activities in adopted villages.',
  },
];

export default function EventSection() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-700">
            Stay updated with our upcoming events and be a part of meaningful activities organized by NSS TSEC.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-red-600">{event.title}</h3>
              <p className="mt-2 text-gray-600">{event.date}</p>
              <p className="mt-4 text-gray-700">{event.description}</p>
              <a
                href="#"
                className="mt-6 inline-block bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
