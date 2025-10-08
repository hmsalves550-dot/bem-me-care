interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contacto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto connosco para mais informações 
              sobre os nossos serviços ou para agendar uma avaliação gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F3E5F5' }}>
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600 mb-2">Disponível 24 horas por dia</p>
                    <a 
                      href="tel:+351932591075" 
                      className="text-lg font-medium hover:opacity-80 transition-colors"
                      style={{ color: '#B39DDB' }}
                    >
                      932 591 075
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F3E5F5' }}>
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Resposta em 24 horas</p>
                    <a 
                      href="mailto:info@bem-me-care.pt" 
                      className="text-lg font-medium hover:opacity-80 transition-colors"
                      style={{ color: '#B39DDB' }}
                    >
                      info@bem-me-care.pt
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F3E5F5' }}>
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Áreas de Serviço</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Distrito do Porto</p>
                      <p>Concelho de Espinho</p>
                      <p>Concelho de Santa Maria da Feira</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F3E5F5' }}>
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Domingo: 24 horas</p>
                      <p>Emergências: Sempre disponível</p>
                      <p>Escritório: 9h às 18h (dias úteis)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envie-nos uma Mensagem
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Apelido *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Seu apelido"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Seu número de telefone"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="higiene">Higiene e Conforto Pessoal</option>
                    <option value="seniorsitting">Seniorsitting</option>
                    <option value="roupa">Tratamento de Roupa</option>
                    <option value="alimentacao">Cuidados Alimentares</option>
                    <option value="habitacao">Higiene da Habitação</option>
                    <option value="saude">Apoio na Saúde</option>
                    <option value="permanente">Apoio Permanente 24h</option>
                    <option value="avaliacao">Avaliação Personalizada</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Descreva as suas necessidades ou faça a sua pergunta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#B39DDB' }}
                >
                  Enviar Mensagem
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-600 text-center">
                * Campos obrigatórios. Responderemos no prazo de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacto Rápido
            </h2>
            <p className="text-xl text-gray-600">
              Precisa de ajuda imediata? Use uma das opções abaixo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="tel:+351932591075"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ligar Agora
              </h3>
              <p className="text-gray-600 mb-3">
                Atendimento imediato 24h/dia
              </p>
              <p className="font-semibold" style={{ color: '#B39DDB' }}>
                932 591 075
              </p>
            </a>

            <a
              href="https://wa.me/351932591075"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F3E5F5' }}>
                <svg className="w-8 h-8" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-3">
                Mensagem rápida e conveniente
              </p>
              <p className="font-semibold" style={{ color: '#25D366' }}>
                Enviar Mensagem
              </p>
            </a>

            <a
              href="mailto:info@bem-me-care.pt"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600 mb-3">
                Resposta em 24 horas
              </p>
              <p className="font-semibold" style={{ color: '#B39DDB' }}>
                info@bem-me-care.pt
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-xl text-gray-600">
              Mantenha-se atualizado com as nossas novidades e dicas de cuidados
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://facebook.com/bemmecare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              style={{ backgroundColor: '#1877F2' }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/bemmecare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              style={{ backgroundColor: '#E4405F' }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/bemmecare"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              style={{ backgroundColor: '#0A66C2' }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/351932591075"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20" style={{ backgroundColor: '#B39DDB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emergência? Contacte-nos Imediatamente
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F3E5F5' }}>
            Estamos disponíveis 24 horas por dia, 7 dias por semana, para situações de emergência.
          </p>
          <a
            href="tel:+351932591075"
            className="bg-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            style={{ color: '#B39DDB' }}
          >
            🚨 Ligar Agora: 932 591 075
          </a>
        </div>
      </section>
    </div>
  );
}
