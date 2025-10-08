interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: "🛁",
      title: "Higiene e Conforto Pessoal",
      description: "Cuidados de higiene diários com respeito e dignidade",
      details: [
        "Higiene corporal completa",
        "Cuidados com a pele e hidratação",
        "Higiene oral e dentária",
        "Cuidados com o cabelo",
        "Mudança de fraldas e vestuário",
        "Posicionamentos e mobilizações"
      ]
    },
    {
      icon: "👥",
      title: "Seniorsitting",
      description: "Companhia qualificada e atenta às necessidades",
      details: [
        "Companhia e conversação",
        "Atividades de estimulação cognitiva",
        "Jogos e entretenimento",
        "Leitura e música",
        "Supervisão de segurança",
        "Apoio emocional"
      ]
    },
    {
      icon: "👕",
      title: "Tratamento de Roupa",
      description: "Lavagem, secagem e arranjo de vestuário",
      details: [
        "Lavagem e secagem de roupa",
        "Passagem a ferro",
        "Arranjo e costura básica",
        "Organização do guarda-roupa",
        "Mudança de roupa de cama",
        "Cuidados com calçado"
      ]
    },
    {
      icon: "🍽️",
      title: "Cuidados Alimentares",
      description: "Preparação de refeições nutritivas e saudáveis",
      details: [
        "Preparação de refeições equilibradas",
        "Dietas especiais e terapêuticas",
        "Apoio na alimentação",
        "Hidratação adequada",
        "Compras de alimentos",
        "Organização da despensa"
      ]
    },
    {
      icon: "🏠",
      title: "Higiene da Habitação",
      description: "Limpeza e organização do espaço doméstico",
      details: [
        "Limpeza geral da habitação",
        "Organização dos espaços",
        "Limpeza de janelas",
        "Cuidados com plantas",
        "Manutenção básica",
        "Gestão de resíduos"
      ]
    },
    {
      icon: "⚕️",
      title: "Apoio na Saúde",
      description: "Acompanhamento em consultas e medicação",
      details: [
        "Administração de medicação",
        "Acompanhamento a consultas",
        "Controlo de sinais vitais",
        "Cuidados básicos de enfermagem",
        "Gestão de equipamentos médicos",
        "Comunicação com profissionais de saúde"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: "🚶",
      title: "Acompanhamento no Exterior",
      description: "Passeios, compras e atividades fora de casa"
    },
    {
      icon: "🎭",
      title: "Dinamização Social e Cultural",
      description: "Atividades recreativas e de socialização"
    },
    {
      icon: "🛠️",
      title: "Fornecimento de Equipamentos",
      description: "Camas articuladas, cadeiras de rodas e outros equipamentos"
    },
    {
      icon: "🌙",
      title: "Apoio Permanente",
      description: "Cuidados 24 horas por dia quando necessário"
    },
    {
      icon: "🚨",
      title: "Emergências",
      description: "Resposta rápida a situações de urgência"
    },
    {
      icon: "📋",
      title: "Avaliação Personalizada",
      description: "Análise detalhada das necessidades específicas"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Os Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de apoio domiciliário, 
              adaptados às necessidades específicas de cada pessoa e família.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Principais
            </h2>
            <p className="text-xl text-gray-600">
              Os nossos serviços essenciais para o bem-estar e conforto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl hover:shadow-lg transition-shadow"
                style={{ backgroundColor: '#F5F5F5' }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2 mt-1" style={{ color: '#B39DDB' }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Complementares
            </h2>
            <p className="text-xl text-gray-600">
              Serviços adicionais para uma experiência completa de cuidados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características dos Nossos Serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Horários Flexíveis
              </h3>
              <p className="text-gray-600 text-sm">
                Adaptamos os horários às suas necessidades e rotinas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Profissionais Qualificados
              </h3>
              <p className="text-gray-600 text-sm">
                Equipa certificada com experiência em cuidados geriátricos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Planos Personalizados
              </h3>
              <p className="text-gray-600 text-sm">
                Cada plano é criado especificamente para cada pessoa
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Segurança Garantida
              </h3>
              <p className="text-gray-600 text-sm">
                Seguros de responsabilidade civil e protocolos de segurança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Informações de Preços
            </h2>
            <p className="text-xl text-gray-600">
              Preços transparentes e competitivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Serviços Pontuais
              </h3>
              <div className="text-3xl font-bold mb-2" style={{ color: '#B39DDB' }}>
                Desde 8€/h
              </div>
              <p className="text-gray-600 mb-6">
                Para necessidades específicas e ocasionais
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sem compromisso de longo prazo</li>
                <li>• Pagamento por serviço</li>
                <li>• Disponibilidade imediata</li>
                <li>• Flexibilidade total de horários</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center border-2" style={{ borderColor: '#B39DDB' }}>
              <div className="text-sm font-semibold text-white px-3 py-1 rounded-full mb-4 inline-block" style={{ backgroundColor: '#B39DDB' }}>
                MAIS POPULAR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contratos Regulares
              </h3>
              <div className="text-3xl font-bold mb-2" style={{ color: '#B39DDB' }}>
                Desde 5€/h
              </div>
              <p className="text-gray-600 mb-6">
                Para cuidados contínuos e regulares
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mínimo de 20 horas por semana</li>
                <li>• Desconto por fidelidade</li>
                <li>• Profissional dedicado</li>
                <li>• Plano personalizado</li>
                <li>• Supervisão contínua</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("contact")}
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#B39DDB' }}
            >
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#B39DDB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa dos Nossos Serviços?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F3E5F5' }}>
            Entre em contacto connosco para uma avaliação gratuita e personalizada. 
            Estamos aqui para ajudar com carinho e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#B39DDB' }}
            >
              Contactar Agora
            </button>
            <button
              onClick={() => onNavigate("how-it-works")}
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#9C27B0' }}
            >
              Como Funciona
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
