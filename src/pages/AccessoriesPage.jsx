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
      description: 'A playful, hand-crocheted pot that adds charm to any shelf or desk.',
    },
    {
      id: 2,
      name: 'Octopus keychain',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138665/494575300_1004835734785297_8755481623201899788_n_iiqb43.jpg',
      description: 'A cute, hand-crocheted octopus to guard your keys with charm and color!',
    },
    {
      id: 3,
      name: 'Single sunflower sticks',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749138737/494579753_723954477233489_5040608267233253853_n_ghqcvw.jpg',
      description: 'A bright, hand-crocheted sunflower to bring sunshine into any corner of your home.',
    },
    {
      id: 4,
      name: 'Glasses holder',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139237/495047287_1457116429067983_1593015004625039392_n_vorxgs.jpg',
      description: 'Keep your specs safe in style with this soft, hand-crocheted glasses holder.',
    },
    {
      id: 5,
      name: 'Hair ties',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139092/495048160_1225192032584000_1004713113986549284_n_ymmvoo.jpg',
      description: 'Gentle on your hair, bold in style. Handmade with love and vibrant yarn.',
    },
    {
      id: 6,
      name: 'Crochet mirror',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139092/495046378_575058435285284_5072881901698051517_n_hgpizo.jpg',
      description: 'Soft textures meet shiny reflections. This crochet mirror brings cozy vibes to any corner.',
    },
        {
      id: 7,
      name: 'Ribbon tied bouquet',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139382/494574205_1871956590322665_618424554874611650_n_kf65pm.jpg',
      description: 'Handmade flowers bundled in charm, wrapped with a soft ribbon for a timeless gift.',
    },
    {
      id: 8,
      name: 'Hair bow',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749139393/495046399_1285345219858469_5289437723798734108_n_vq6zoy.jpg',
      description: 'A timeless accessory with a handmade twist. Perfect for buns, braids, or ponytails.',
    },
    {
      id: 9,
      name: 'Plushies',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142074/494575873_1667464627294893_6158535017416911769_n_vtmpo6.jpg',
      description: 'Cuddly, cute, and completely handmade — these crochet plushies are bursting with personality!',
    },
    {
      id: 10,
      name: 'Scrunchies',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142076/504140863_735755525500723_4860372652940094337_n_aznldv.jpg',
      description: 'Hand-crocheted with care, these scrunchies are gentle on hair and rich in charm.',
    },
    {
      id: 11,
      name: 'Rose love',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142074/494572410_1923787085031809_8459630005058849736_n_xnnptj.jpg',
      description: 'Delicate, timeless, and full of meaning — the perfect bloom for someone special.',
    },
    {
      id: 12,
      name: 'Initial keychain',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142075/494577064_3081103215380334_2738408433150235475_n_wjixac.jpg',
      description: 'A custom crochet keychain that adds a personal touch to your keys or bag.',
    },
    {
      id: 13,
      name: 'Guitar keychain',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142075/495047844_1529960684629130_7240220186814882209_n_kose5p.jpg',
      description: 'Crochet meets melody in this quirky, cute keychain for every guitar enthusiast.',
    },
    {
      id: 14,
      name: 'Spider man',
      price: 'DM US',
      image: 'https://res.cloudinary.com/doejabjai/image/upload/v1749142074/494576852_2009694556224921_7631472830000184284_n_lc7t3z.jpg',
      description: 'Swing into cuteness with this mini Spider-Man plush, crafted with care and vibrant yarn.',
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