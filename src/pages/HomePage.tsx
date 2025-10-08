import { useState, useEffect } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: "🛁",
      title: "Higiene e Conforto Pessoal",
      description: "Cuidados de higiene diários com respeito e dignidade"
    },
    {
      icon: "👥",
      title: "Seniorsitting",
      description: "Companhia qualificada e atenta às necessidades"
    },
    {
      icon: "👕",
      title: "Tratamento de Roupa",
      description: "Lavagem, secagem e arranjo de vestuário"
    },
    {
      icon: "🍽️",
      title: "Cuidados Alimentares",
      description: "Preparação de refeições nutritivas e saudáveis"
    },
    {
      icon: "🏠",
      title: "Higiene da Habitação",
      description: "Limpeza e organização do espaço doméstico"
    },
    {
      icon: "⚕️",
      title: "Apoio na Saúde",
      description: "Acompanhamento em consultas e medicação"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const promoSlides = [
    {
      id: 1,
      title: "🎉 Oferta Especial de Outubro!",
      subtitle: "10% de Desconto para Novos Clientes",
      description: "Aproveite 10% de desconto nos primeiros 3 meses dos contratos regulares. Válido apenas durante o mês de outubro para novos clientes.",
      cta: "Aproveitar Oferta",
      background: "linear-gradient(135deg, #A594C7 0%, #BBA6DA 100%)",
      textColor: "white"
    },
		{
      id: 2,
      title: "💝 Cuidamos com Carinho",
      subtitle: "Apoio Domiciliário Personalizado",
      description: "Apoio domiciliário personalizado para idosos e utentes acamados no distrito do Porto, acrescido dos concelhos de Espinho e Santa Maria da Feira. Profissionalismo, confiança e dedicação ao seu serviço.",
      cta: "Contactar Agora",
      background: "linear-gradient(135deg, #BBA6DA 100%, #D1C4E9 0%)",
      textColor: "white"
    },
    {
      id: 3,
      title: "🏠 No Conforto do Seu Lar",
      subtitle: "Cuidados Profissionais em Casa",
      description: "Mantenha a independência e dignidade no ambiente familiar. Equipa certificada e experiente disponível 24h/dia para garantir o melhor cuidado.",
      cta: "Saber Mais",
      background: "linear-gradient(135deg, #C8B8E0 0%, #BBA6DA 100%)",
      textColor: "white"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [promoSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCTAClick = (slideId: number) => {
    if (slideId === 1) {
      onNavigate("contact");
    } else if (slideId === 2) {
      onNavigate("contact");
    } else {
      onNavigate("about");
    }
  };

  return (
    <div>
      {/* Spacer after header */}
      <div className="h-8 bg-white"></div>

      {/* Promotional Carousel */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative h-80 md:h-96">
          {promoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
              }`}
              style={{ background: slide.background }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-center w-full">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: slide.textColor }}>
                    {slide.title}
                  </h2>
                  <h3 className="text-xl md:text-3xl font-semibold mb-6" style={{ color: slide.textColor }}>
                    {slide.subtitle}
                  </h3>
                  <p className="text-base md:text-xl mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed" style={{ color: slide.textColor }}>
                    {slide.description}
                  </p>
                  <button
                    onClick={() => handleCTAClick(slide.id)}
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white bg-opacity-60 hover:bg-opacity-80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? promoSlides.length - 1 : currentSlide - 1)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % promoSlides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-25 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Spacer after carousel */}
      <div className="h-12 bg-white"></div>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Os Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de apoio domiciliário, 
              adaptados às necessidades específicas de cada pessoa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
                style={{ backgroundColor: '#F5F5F5' }}
                onClick={() => onNavigate("services")}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("services")}
              className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#B39DDB' }}
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Porque Escolher a Bem-Me-Care?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8' }}>
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Equipa Qualificada
              </h3>
              <p className="text-gray-600">
                Profissionais experientes e certificados, com formação contínua em cuidados geriátricos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8' }}>
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Disponibilidade 24h
              </h3>
              <p className="text-gray-600">
                Apoio permanente e atendimento de emergências a qualquer hora do dia ou da noite.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8' }}>
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cuidado Personalizado
              </h3>
              <p className="text-gray-600">
                Planos de cuidados adaptados às necessidades específicas de cada pessoa e família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regiões de Atuação
            </h2>
            <p className="text-xl text-gray-600">
              Servimos com dedicação as seguintes regiões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#7B1FA2' }}>Porto</h3>
              <p style={{ color: '#8E24AA' }}>
                Cobertura completa do distrito do Porto
              </p>
            </div>

            <div className="p-8 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #E8F5E8 0%, #A8E6CF 100%)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#2E7D32' }}>Espinho</h3>
              <p style={{ color: '#388E3C' }}>
                Atendimento especializado no concelho de Espinho
              </p>
            </div>

            <div className="p-8 rounded-xl text-center" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#7B1FA2' }}>Santa Maria da Feira</h3>
              <p style={{ color: '#8E24AA' }}>
                Serviços completos no concelho de Santa Maria da Feira
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("areas")}
              className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#B39DDB' }}
            >
              Saber Mais
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#B39DDB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F3E5F5' }}>
            Entre em contacto connosco hoje mesmo para uma avaliação gratuita e personalizada. 
            Estamos aqui para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#B39DDB' }}
            >
              Contactar Agora
            </button>
            <a
              href="tel:+351932591075"
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#9C27B0' }}
            >
              📞 932 591 075
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
