import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  text: string;
  avatar: string;
  rating: number;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Алексей М.",
      position: "Владелец BMW X6",
      text: "Великолепная работа! Оклейка защитной пленкой сделана идеально, все стыки выполнены безупречно. Очень доволен результатом и профессионализмом команды.",
      avatar: "https://placehold.co/200/333333/666666/png?text=A",
      rating: 5
    },
    {
      id: 2,
      name: "Ирина К.",
      position: "Владелица Audi Q5",
      text: "Обратилась для детейлинга салона своего автомобиля. Результат превзошел все ожидания! Салон выглядит как новый, все пятна и загрязнения были удалены.",
      avatar: "https://placehold.co/200/333333/666666/png?text=И",
      rating: 5
    },
    {
      id: 3,
      name: "Дмитрий В.",
      position: "Владелец Mercedes GLE",
      text: "Профессиональный подход и внимание к деталям. Сделали полную оклейку кузова и тонировку. Качество материалов и исполнения на высшем уровне.",
      avatar: "https://placehold.co/200/333333/666666/png?text=Д",
      rating: 5
    },
    {
      id: 4,
      name: "Сергей П.",
      position: "Владелец Porsche Macan",
      text: "Уже второй раз обращаюсь в CRAS Детейлинг, и снова остался полностью доволен. Керамическое покрытие нанесено идеально, цвет автомобиля стал глубже и насыщеннее.",
      avatar: "https://placehold.co/200/333333/666666/png?text=С",
      rating: 5
    },
  ];

  return (
    <section className="section-padding bg-black relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-4 uppercase text-xs font-bold tracking-wider">
            Отзывы клиентов
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Наши клиенты говорят</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Мнения наших клиентов о нашей работе
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-orange-500">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-orange-500' : 'text-gray-600'}`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-300 italic mb-6 text-lg">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                        <p className="text-orange-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-orange-500 !w-12 !h-12 !bg-black/70 !rounded-full flex items-center justify-center z-20 !left-1 md:!left-[-20px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next !text-orange-500 !w-12 !h-12 !bg-black/70 !rounded-full flex items-center justify-center z-20 !right-1 md:!right-[-20px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !bottom-0 mt-8"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-orange-600"></div>
      <div className="absolute top-16 left-0 w-1/4 h-1 bg-orange-600"></div>
    </section>
  );
}