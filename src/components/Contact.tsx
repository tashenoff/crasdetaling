import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp - keep it short and simple
    const message = `Здравствуйте! Меня зовут ${formData.name}, интересует ${formData.service || 'детейлинг'}. Автомобиль: ${formData.car}. ${formData.message}`;
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp link with phone number and pre-filled message
    // Using the WhatsApp Click to Chat feature
    const whatsappUrl = `https://api.whatsapp.com/send?phone=77075707713&text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Alternative direct method for mobile devices
  const handleDirectWhatsApp = () => {
    // Create a simpler message for mobile
    const message = `Здравствуйте! Меня зовут ${formData.name}, интересует ${formData.service || 'детейлинг'}. Тел: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Use direct WhatsApp protocol
    window.location.href = `whatsapp://send?phone=77075707713&text=${encodedMessage}`;
  };

  return (
    <section id="contact" className="section-padding bg-black text-white relative">
      <div className="absolute top-0 left-0 w-1/4 h-1 bg-orange-600"></div>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-4 uppercase text-xs font-bold tracking-wider">
            Связаться с нами
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Начнем сотрудничество</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для консультации и записи
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-neutral-800 rounded-lg p-8 shadow-xl border border-neutral-700">
            <h3 className="text-2xl font-bold mb-6 text-orange-500 uppercase">Оставить заявку</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-600 rounded-sm bg-neutral-900 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-600 rounded-sm bg-neutral-900 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="car" className="block text-gray-300 mb-2 font-medium">Марка и модель автомобиля</label>
                <input 
                  type="text" 
                  id="car" 
                  value={formData.car}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-600 rounded-sm bg-neutral-900 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="Например: BMW X5"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">Интересующая услуга</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-600 rounded-sm bg-neutral-900 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors appearance-none"
                >
                  <option value="">Выберите услугу</option>
                  <option value="Защитная оклейка">Защитная оклейка</option>
                  <option value="Детейлинг кузова">Детейлинг кузова</option>
                  <option value="Детейлинг салона">Детейлинг салона</option>
                  <option value="Керамическое покрытие">Керамическое покрытие</option>
                  <option value="Антигравийная защита">Антигравийная защита</option>
                  <option value="Тонировка стёкол">Тонировка стёкол</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Сообщение (необязательно)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-600 rounded-sm bg-neutral-900 text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                  placeholder="Дополнительная информация..."
                ></textarea>
              </div>
              
              <div className="mb-4 text-sm text-gray-400">
                <p>Нажимая кнопку "Написать в WhatsApp", вы соглашаетесь с политикой конфиденциальности.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit" 
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-sm transition-colors text-sm uppercase tracking-wide flex items-center justify-center"
                >
                 
                  Отправить в WhatsApp
                </button>
             
              </div>
            </form>
            <div className="mt-4 text-center">
              <a 
                href={`https://wa.me/77075707713?text=${encodeURIComponent('Здравствуйте! Интересует услуга детейлинга.')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 text-sm inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Связаться напрямую без заполнения формы
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col ">
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-orange-500 uppercase">Контактная информация</h3>
              
              <div className="space-y-6">
                {/* <div className="flex items-start">
                  <div className="bg-black p-3 rounded-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-white">Адрес</h4>
                    <p className="text-gray-400">г. Москва, ул. Автомобильная, 123</p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-white">Телефон</h4>
                    <a href="tel:+77075707713" className="text-gray-400 hover:text-orange-400 transition-colors">+7 (707) 570-77-13</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-white">Email</h4>
                    <a href="mailto:info@crasdetailing.ru" className="text-gray-400 hover:text-orange-400 transition-colors">info@crasdetailing.ru</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-sm mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-1 text-white">WhatsApp</h4>
                    <a href="https://wa.me/77075707713" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">+7 (707) 570-77-13</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700">
              <h4 className="font-semibold text-xl mb-4 text-orange-500 uppercase">Часы работы</h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white">Понедельник - Пятница</span>
                  <span className="text-orange-400">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Суббота</span>
                  <span className="text-orange-400">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Воскресенье</span>
                  <span className="text-orange-400">Выходной</span>
                </div>
              </div>
              
              {/* Social Media */}
              {/* <div>
                <h4 className="font-semibold text-xl mb-4 text-orange-500 uppercase">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-black text-orange-500 p-3 rounded-sm hover:bg-orange-900/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-black text-orange-500 p-3 rounded-sm hover:bg-orange-900/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-black text-orange-500 p-3 rounded-sm hover:bg-orange-900/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/77075707713" target="_blank" rel="noopener noreferrer" className="bg-black text-green-500 p-3 rounded-sm hover:bg-green-900/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/6 h-1 bg-orange-600"></div>
    </section>
  );
}