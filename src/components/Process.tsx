export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Консультация",
      description: "Обсуждаем ваши пожелания, особенности автомобиля и подбираем оптимальное решение.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Диагностика",
      description: "Проводим детальный осмотр автомобиля, выявляем все дефекты и составляем план работ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Подготовка",
      description: "Тщательно очищаем автомобиль и готовим поверхности для дальнейших работ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Выполнение работ",
      description: "Проводим все необходимые процедуры с максимальной тщательностью и вниманием к деталям.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Контроль качества",
      description: "Проверяем результат на соответствие высоким стандартам качества нашей студии.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Передача клиенту",
      description: "Демонстрируем результат, даем рекомендации по уходу и отвечаем на ваши вопросы.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-neutral-900 relative">
      <div className="absolute top-0 right-0 h-20 w-1/4 bg-orange-600 clip-polygon-top z-0"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-4 uppercase text-xs font-bold tracking-wider">
            Как мы работаем
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Выверенный процесс</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Наш процесс создан для обеспечения высочайшего качества на каждом этапе работы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              <div className="mb-4 bg-black p-4 rounded-md inline-block border border-neutral-800 group-hover:border-orange-500 transition-all duration-300">
                {step.icon}
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-orange-600 text-white text-sm font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mb-3 uppercase group-hover:text-orange-500 transition-colors">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-16 w-1/6 bg-orange-600 clip-polygon-bottom z-0"></div>
    </section>
  );
}