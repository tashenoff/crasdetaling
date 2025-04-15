export default function Instagram() {
  // Mock Instagram posts 
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+1",
      likes: 142,
      comments: 24,
      caption: "Детейлинг BMW M4. Полная защита кузова и керамическое покрытие. #CRAS #детейлинг #bmw"
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+2",
      likes: 98,
      comments: 12,
      caption: "Оклейка Mercedes-Benz GLS матовой защитной пленкой. #CRAS #оклейка #mercedes"
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+3",
      likes: 201,
      comments: 18,
      caption: "Тонировка и детейлинг салона Audi RS7. #CRAS #тонировка #audi"
    },
    {
      id: 4,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+4",
      likes: 165,
      comments: 32,
      caption: "Восстановление и защита кожаного салона Porsche Cayenne. #CRAS #детейлинг #porsche"
    },
    {
      id: 5,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+5",
      likes: 187,
      comments: 22,
      caption: "Полная оклейка Tesla Model Y с использованием прозрачной пленки. #CRAS #оклейка #tesla"
    },
    {
      id: 6,
      imageUrl: "https://placehold.co/600x600/1a1a1a/666666/png?text=Post+6",
      likes: 178,
      comments: 29,
      caption: "До и после: полировка и керамическое покрытие Lexus LX. #CRAS #детейлинг #lexus"
    },
  ];

  return (
    <section id="instagram" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 px-3 py-1 mb-4 uppercase text-xs font-bold tracking-wider">
            Мы в Instagram
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Следите за нами</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Последние работы, процессы и результаты в нашем Instagram
          </p>
        </div>
        
        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {instagramPosts.map((post) => (
            <a 
              key={post.id}
              href="#"
              className="group relative overflow-hidden block aspect-square"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="bg-black/70 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-1">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white ml-1">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Follow Button */}
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-400 bg-transparent hover:bg-orange-900/20 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Подписаться на @cras_detailing
          </a>
        </div>
      </div>
    </section>
  );
}