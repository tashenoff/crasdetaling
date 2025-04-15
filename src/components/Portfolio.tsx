import { useState } from 'react';
import Image from 'next/image';

type WorkItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
}

export default function Portfolio() {
  // Mock data - would come from an API or CMS in a real application
  const works: WorkItem[] = [
    {
      id: 1,
      title: "Полная оклейка BMW X5",
      description: "Защитная пленка на весь кузов и детейлинг интерьера",
      category: "оклейка",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=BMW+X5"
    },
    {
      id: 2,
      title: "Детейлинг Mercedes-Benz S-Class",
      description: "Полировка кузова и нанесение керамического покрытия",
      category: "детейлинг",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=Mercedes"
    },
    {
      id: 3,
      title: "Антигравийная защита Porsche 911",
      description: "Частичная оклейка передней части автомобиля",
      category: "оклейка",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=Porsche"
    },
    {
      id: 4,
      title: "Комплексная обработка Tesla Model 3",
      description: "Полная защита автомобиля и детейлинг салона",
      category: "детейлинг",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=Tesla"
    },
    {
      id: 5,
      title: "Тонировка Audi Q8",
      description: "Тонировка стекол премиальной пленкой",
      category: "тонировка",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=Audi"
    },
    {
      id: 6,
      title: "Защита Range Rover",
      description: "Полная оклейка кузова и реставрация салона",
      category: "оклейка",
      imageSrc: "https://placehold.co/600x400/1a1a1a/666666/png?text=Range+Rover"
    }
  ];

  const [filter, setFilter] = useState('все');
  
  const categories = [
    { id: 'все', name: 'Все работы' },
    { id: 'оклейка', name: 'Защитная оклейка' },
    { id: 'детейлинг', name: 'Детейлинг' },
    { id: 'тонировка', name: 'Тонировка' }
  ];

  const filteredWorks = filter === 'все' 
    ? works 
    : works.filter(work => work.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-4 uppercase text-xs font-bold tracking-wider">
            Наши работы
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Идеальный результат</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Примеры наших успешно выполненных проектов
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-sm transition-all uppercase text-sm font-medium tracking-wide ${
                filter === category.id 
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-900/30' 
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map(work => (
            <div 
              key={work.id} 
              className="group relative overflow-hidden rounded-md bg-neutral-800 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/20"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={work.imageSrc}
                  alt={work.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:bg-gradient-to-t from-orange-900/80 to-transparent">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-300 transition-colors">{work.title}</h3>
                <p className="text-gray-300 mb-3">{work.description}</p>
                <span className="inline-block bg-black/40 text-orange-400 px-3 py-1 text-xs rounded-sm uppercase font-medium">
                  {categories.find(c => c.id === work.category)?.name || work.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}