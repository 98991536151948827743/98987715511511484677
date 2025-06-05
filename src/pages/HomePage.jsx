import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageSquare, Info, Sparkles, Heart, Award } from 'lucide-react'; 
export default function HomePage() {
  const quickLinks = [
    { name: 'Shop Accessories', path: '/accessories', icon: ShoppingBag, description: 'Explore our unique handmade accessories.' },
    { name: 'Get in Touch', path: '/contact', icon: MessageSquare, description: 'Have questions? We\'d love to hear from you!' },
    { name: 'About Diya', path: '/about', icon: Info, description: 'Learn more about the artisan behind the creations.' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Cheeky bloom flower pot', image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138522/495048418_3103229269834413_500170509775916424_n_okifku.jpg', price: 'DM US' },
    { id: 2, name: 'Octopus keychain', image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138665/494575300_1004835734785297_8755481623201899788_n_iiqb43.jpg', price: 'DM US' },
    { id: 3, name: 'Single sunflower sticks', image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138737/494579753_723954477233489_5040608267233253853_n_ghqcvw.jpg', price: 'DM US' },
  ];

  return (
    <div className="py-12">
      <section className="text-center mb-16 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in-down">
          Crochet Hub by Diya
        </h1>
        <p className="text-white/80 text-xl md:text-2xl mb-8 animate-fade-in">
          Handcrafted treasures, made with love. Your online destination for unique crochet creations.
        </p>
        <Link
          to="/accessories"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
        >
          <ShoppingBag size={24} className="mr-3" />
          Shop Our Collection
        </Link>
      </section>

      <section className="mb-16 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10 animate-fade-in-up">
          Why Choose Crochet Hub by Diya?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Heart size={48} className="text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Made with Love</h3>
            <p className="text-white/70 text-base">Every stitch is crafted with passion and attention to detail, ensuring a unique and heartfelt product.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Award size={48} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Exceptional Quality</h3>
            <p className="text-white/70 text-base">We use only premium yarns and materials, guaranteeing durability and comfort in every piece.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Sparkles size={48} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Unique Designs</h3>
            <p className="text-white/70 text-base">Discover one-of-a-kind patterns and styles that you won't find anywhere else.</p>
          </div>
        </div>
      </section>

      <section className="mb-16 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10 animate-fade-in-up">
          Our Special Creations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden text-center animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/6b21a8/ffffff?text=Product+Image`; }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-purple-300 text-lg font-bold mb-4">{product.price}</p>
              <Link
                to="/accessories"
                className="inline-block px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-200 text-sm"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16 px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10 animate-fade-in-up">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Icon size={48} className="text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
                <p className="text-white/70 text-base">{link.description}</p>
              </Link>
            );
          })}
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
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; animation-delay: 0.3s; }
        .animate-bounce-in { animation: bounceIn 0.8s ease-out forwards; animation-delay: 0.6s; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}