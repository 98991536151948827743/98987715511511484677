import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react'; // Lucide icons for contact info

export default function ContactPage() {
  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '123 Crochet Lane, Yarnville, Craftland, 12345' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'hello@crochethubbydiya.com' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9 AM - 5 PM (IST)' },
  ];

  // Google Maps embed URL for a placeholder location (e.g., a generic park in India)
  // IMPORTANT: Replace this with your actual business location's embed URL from Google Maps.
  // To get an embed URL: Go to Google Maps, search for your location, click 'Share', then 'Embed a map'.
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.406981846497!2d77.0142750750519!3d28.7423232750519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0140d3463999%3A0x673c6b245089f8d!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1687891234567!5m2!1sen!2sin";


  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in-down">
          Get in Touch
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 animate-fade-in">
          We'd love to hear from you! Reach out to us using the information below.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="mb-16 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left">
            Our Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center space-x-4 text-white/90">
                  <Icon size={32} className="text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl">{item.label}</h3>
                    <p className="text-white/70 text-lg">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="mb-16 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-white mb-6 p-8 text-center md:text-left border-b border-white/20">
            Find Us on the Map
          </h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Google Maps"
              className="rounded-b-2xl" // Apply rounded corners to the bottom
            ></iframe>
          </div>
        </div>
      </section>

      {/* Animations (from HomePage, ensuring consistency) */}
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; animation-delay: 0.3s; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}