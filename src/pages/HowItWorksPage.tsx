interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: "1",
      title: "Contacto Inicial",
      description: "Entre em contacto connosco através do telefone, email ou formulário online",
      details: [
        "Atendimento personalizado e sem compromisso",
        "Esclarecimento de dúvidas sobre os nossos serviços",
        "Agendamento da visita técnica gratuita",
        "Disponibilidade 24 horas por dia"
      ],
      icon: "📞"
    },
    {
      number: "2",
      title: "Avaliação Personalizada",
      description: "Visita técnica gratuita para avaliar as necessidades específicas",
      details: [
        "Avaliação das necessidades de cuidados",
        "Análise do ambiente doméstico",
        "Conversa com a família sobre expectativas",
        "Identificação de equipamentos necessários"
      ],
      icon: "🏠"
    },
    {
      number: "3",
      title: "Plano de Cuidados",
      description: "Criação de um plano personalizado adaptado às suas necessidades",
      details: [
        "Definição dos serviços necessários",
        "Estabelecimento de horários flexíveis",
        "Seleção do profissional mais adequado",
        "Orçamento transparente e detalhado"
      ],
      icon: "📋"
    },
    {
      number: "4",
      title: "Início dos Serviços",
      description: "Começamos a prestar os cuidados acordados com total profissionalismo",
      details: [
        "Apresentação do profissional designado",
        "Início dos cuidados conforme planeado",
        "Período de adaptação supervisionado",
        "Ajustes conforme necessário"
      ],
      icon: "🤝"
    },
    {
      number: "5",
      title: "Acompanhamento Contínuo",
      description: "Monitorização regular da qualidade dos serviços prestados",
      details: [
        "Reavaliações periódicas das necessidades",
        "Comunicação regular com a família",
        "Relatórios de acompanhamento",
        "Ajustes no plano de cuidados quando necessário"
      ],
      icon: "📊"
    }
  ];

  const paymentMethods = [
    {
      title: "Transferência Bancária",
      description: "Pagamento mensal por transferência bancária",
      icon: "🏦"
    },
    {
      title: "Numerário",
      description: "Pagamento em dinheiro ao profissional",
      icon: "💰"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente, desde o primeiro contacto até ao acompanhamento contínuo. 
              Conheça os passos para começar a receber os nossos cuidados.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4" style={{ backgroundColor: '#B39DDB' }}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="mr-2 mt-1" style={{ color: '#B39DDB' }}>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F3E5F5' }}>
                    <span className="text-6xl">{step.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formas de Pagamento
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos opções de pagamento convenientes e flexíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-6xl mb-6">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Condições de Pagamento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Serviços Pontuais:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pagamento no final de cada serviço</li>
                  <li>• Sem taxas adicionais</li>
                  <li>• Recibo emitido imediatamente</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Contratos Regulares:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Faturação mensal</li>
                  <li>• Pagamento até ao dia 8 do mês seguinte</li>
                  <li>• Transferência bancária ou numerário</li>
                  <li>• Desconto de 2% para pagamento antecipado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garantia de Qualidade
            </h2>
            <p className="text-xl text-gray-600">
              O nosso compromisso com a excelência em cada etapa do processo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Profissionais Qualificados
              </h3>
              <p className="text-gray-600">
                Todos os nossos profissionais são certificados e têm formação específica em cuidados geriátricos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Supervisão Contínua
              </h3>
              <p className="text-gray-600">
                Monitorizamos regularmente a qualidade dos serviços através de visitas e relatórios
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comunicação Transparente
              </h3>
              <p className="text-gray-600">
                Mantemos comunicação regular com as famílias sobre o progresso e bem-estar dos utentes
              </p>
            </div>
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
            O primeiro passo é simples: entre em contacto connosco para uma avaliação gratuita e sem compromisso.
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
