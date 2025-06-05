import React from 'react';
import { Link } from 'react-router-dom';

import { Sparkles, Heart, Award, Gem, Handshake, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Passion & Craftsmanship', description: 'Every item is lovingly handmade, infused with dedication and artistic flair.' },
    { icon: Award, title: 'Uncompromising Quality', description: 'We source premium yarns and materials to ensure durability and luxurious feel.' },
    { icon: Sparkles, title: 'Unique Creations', description: 'Discover one-of-a-kind designs that add a special touch to your life.' },
    { icon: Handshake, title: 'Customer Delight', description: 'Your satisfaction is our priority. We strive for exceptional service and a joyful experience.' },
  ];

  return (
    <div className="py-12">
      <section className="text-center mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in-down">
          About Crochet Hub by Diya
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
          Where threads weave into dreams, and every stitch tells a story. We create handcrafted crochet accessories that bring warmth, style, and a touch of uniqueness to your world.
        </p>
      </section>


      <section className="mb-16 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10 animate-fade-in-up">
          Our Core Values
        </h2>
        {/* Hve look---kyuki.....  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Icon size={48} className="text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-base">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
            Meet Diya: The Artisan
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <img
                src="https://res.cloudinary.com/doejabjai/image/upload/v1749146785/343154035_1106184210342246_1255036080098298844_n_ka5isw.jpg"
                alt="Diya - Founder & Artisan"
                className="w-48 h-48 md:w-full md:h-auto object-cover rounded-full md:rounded-xl shadow-lg border border-white/20"
              />
            </div>
            <div className="md:w-2/3 text-white/70 text-lg leading-relaxed text-center md:text-left">
              <p className="mb-4">
                Diya is the heart and soul behind Crochet Hub. With nimble fingers and a creative mind, she transforms skeins of yarn into wearable art and charming decor. Her journey into crochet began as a meditative escape, a way to connect with traditional crafts in a modern world.
              </p>
              <p className="mb-4">
                Driven by a passion for quality and an eye for unique aesthetics, Diya personally designs and crafts each product, ensuring that every piece carries her signature touch of perfection. When you choose a creation from Crochet Hub, you're not just buying an accessory; you're investing in a piece of art made with genuine care and dedication.
              </p>
              <p className="font-semibold text-white">"Bringing warmth, one stitch at a time."</p>
            </div>
          </div>
        </div>
      </section>


      <section className="mb-16 px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
            Our Story: From Passion to Purpose
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://res.cloudinary.com/doejabjai/image/upload/v1749146600/full_square_crochet_collage_bt3oqq.jpg"
                alt="Our Story"
                className="w-full h-auto rounded-xl shadow-lg border border-white/20"
              />
            </div>
            <div className="md:w-1/2 text-white/70 text-lg leading-relaxed">
              <p className="mb-4">
                Crochet Hub by Diya began with a simple yarn and a profound love for the art of crochet. Diya, our founder, discovered the meditative joy of crafting intricate patterns and soon realized the potential to share this warmth and beauty with others. What started as a personal hobby quickly blossomed into a mission to create exquisite, handmade accessories that stand apart.
              </p>
              <p>
                From cozy scarves to charming amigurumi, every piece is a labor of love, meticulously crafted with attention to detail and a commitment to quality. We believe in slow fashion, in cherishing the process, and in producing items that carry a piece of the artisan's soul.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in-up">
          Ready to Explore Our Handcrafted World?
        </h2>
<div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 animate-fade-in-up sm:text-center" style={{ animationDelay: '0.6s' }}>
  <Link to="/accessories" className="w-60 text-center inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
    Shop Now
  </Link>
  <Link to="/contact" className="w-60 text-center inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
    Contact Us
  </Link>
</div>

      </section>
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