import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ShoppingBag } from 'lucide-react';

export default function AccessoriesPage() {

  const accessories = [
    {
      id: 1,
      name: 'Cheeky bloom flower pot',
      price: 'DM US', 
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138522/495048418_3103229269834413_500170509775916424_n_okifku.jpg',
      description: 'A beautifully soft scarf, perfect for cozy evenings. Handmade with premium yarn.',
    },
    {
      id: 2,
      name: 'Octopus keychain',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138665/494575300_1004835734785297_8755481623201899788_n_iiqb43.jpg',
      description: 'An adorable, squishy companion for all ages. Crafted with vibrant, child-safe threads.',
    },
    {
      id: 3,
      name: 'Single sunflower sticks',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138737/494579753_723954477233489_5040608267233253853_n_ghqcvw.jpg',
      description: 'Add a touch of bohemian elegance to any room with this intricate piece.',
    },
    {
      id: 4,
      name: 'Glasses holder',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139237/495047287_1457116429067983_1593015004625039392_n_vorxgs.jpg',
      description: 'Warm and stylish, perfect for chilly weather. Available in various colors.',
    },
    {
      id: 5,
      name: 'Hair ties',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139092/495048160_1225192032584000_1004713113986549284_n_ymmvoo.jpg',
      description: 'Protect your surfaces with these charming floral coasters. A delightful gift idea.',
    },
    {
      id: 6,
      name: 'Crochet mirror',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139092/495046378_575058435285284_5072881901698051517_n_hgpizo.jpg',
      description: 'A magical accessory for your keys or bag. Handmade with sparkle and fun.',
    },
        {
      id: 7,
      name: 'Ribbon tied bouquet',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139382/494574205_1871956590322665_618424554874611650_n_kf65pm.jpg',
      description: 'Protect your surfaces with these charming floral coasters. A delightful gift idea.',
    },
    {
      id: 8,
      name: 'Hair bow',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139393/495046399_1285345219858469_5289437723798734108_n_vq6zoy.jpg',
      description: 'A magical accessory for your keys or bag. Handmade with sparkle and fun.',
    },
  ];

  return (
    <div className="py-12">

      <section className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-4 animate-fade-in-down">
          Our Handmade Accessories
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
          Discover unique and beautifully handcrafted crochet items. Each piece is made with love and precision.
        </p>
      </section>


      <section className="mb-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {accessories.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/4c0a6b/ffffff?text=Crochet+Item`; }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-purple-300 text-2xl font-bold mb-4 flex items-center space-x-2">
                <Tag size={20} className="text-pink-400" />
                <span>{item.price}</span>
              </p>
              <p className="text-white/70 text-sm mb-4 flex-grow">{item.description}</p>

            </div>
          ))}
        </div>
      </section>
      <section className="text-center px-4 mt-16">
        <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in-up">
          Can't find what you're looking for?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >

          Request a Custom Order
        </Link>
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