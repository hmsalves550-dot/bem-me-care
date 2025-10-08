interface AreasPageProps {
  onNavigate: (page: string) => void;
}

export default function AreasPage({ onNavigate }: AreasPageProps) {
  const areas = [
    {
      name: "Porto",
      description: "Cobertura completa da cidade do Porto e concelhos limítrofes",
      details: [
        "Amarante",
        "Baião",
        "Felgueiras",
        "Gondomar",
        "Lousada",
        "Maia",
				"Marco de Canaveses",
				"Matosinhos",
				"Paços de Ferreira",
				"Paredes",
				"Penafiel",
				"Porto",
				"Póvoa de Varzim",
				"Santo Tirso",
				"Trofa",
				"Valongo",
				"Vila do Conde",
				"Vila Nova de Gaia"
      ],
      color: "#B39DDB",
      icon: "🏛️",
      highlights: [
        "Mais de 700 famílias atendidas",
        "Equipa dedicada de 15 profissionais",
        "Tempo médio de resposta: 30 minutos"
      ]
    },
    {
      name: "Espinho",
      description: "Atendimento especializado na região de Espinho e arredores",
      details: [
        "Espinho",
        "Paramos",
        "Silvalde",
        "União das Freguesias de Anta e Guetim"
      ],
      color: "#B39DDB",
      icon: "🏖️",
      highlights: [
        "Mais de 200 famílias atendidas",
        "Equipa local de 8 profissionais",
        "Especialização em cuidados costeiros"
      ]
    },
    {
      name: "Santa Maria da Feira",
      description: "Serviços completos em Santa Maria da Feira e freguesias",
      details: [
        "Argoncilhe",
        "Arrifana",
        "Caldas de São Jorge e Pigeiros (União das Freguesias)",
        "Canedo, Vale e Vila Maior (União das Freguesias)",
        "Escapães",
        "Fiães",
				"Fornos",
				"Lourosa",
				"Lobão, Gião, Louredo e Guisande (União das Freguesias)",
				"Milheirós de Poiares",
				"Mozelos",
				"Nogueira da Regedoura",
				"Paços de Brandão",
				"Rio Meão",
				"Romariz",
				"Sanguedo",
				"Santa Maria da Feira, Travanca, Sanfins e Espargo (União das Freguesias)",
				"Santa Maria de Lamas",
				"São João de Ver",
				"São Miguel do Souto e Mosteirô (União das Freguesias)",
				"São Paio de Oleiros"
      ],
      color: "#B39DDB",
      icon: "🏰",
      highlights: [
        "Mais de 100 famílias atendidas",
        "Equipa regional de 12 profissionais",
        "Parcerias locais"
      ]
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Áreas de Atuação
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servimos com dedicação e responsabilidade as regiões do Porto, Espinho e Santa Maria da Feira, 
              garantindo cuidados de qualidade próximos de casa.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {areas.map((area, index) => (
              <div key={index}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F3E5F5' }}>
                      <span className="text-3xl">{area.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{area.name}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Áreas Cobertas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {area.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <span className="mr-2" style={{ color: area.color }}>•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F3E5F5' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#7B1FA2' }}>Destaques da Região:</h4>
                    <ul className="space-y-1">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm flex items-start" style={{ color: '#8E24AA' }}>
                          <span className="mr-2 mt-1" style={{ color: area.color }}>✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compromisso Local
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais do que prestar serviços, somos parte integrante das comunidades que servimos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Parcerias Locais
              </h3>
              <p className="text-gray-600">
                Trabalhamos em estreita colaboração com centros de saúde, farmácias e outros 
                prestadores de cuidados locais para garantir continuidade de cuidados.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Conhecimento da Comunidade
              </h3>
              <p className="text-gray-600">
                Os nossos profissionais conhecem bem as comunidades locais, facilitando 
                a integração e o acesso a recursos e serviços da região.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Responsabilidade Social
              </h3>
              <p className="text-gray-600">
                Participamos ativamente em iniciativas comunitárias e eventos locais, 
                contribuindo para o bem-estar geral das nossas comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#B39DDB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Está na Nossa Área de Cobertura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F3E5F5' }}>
            Contacte-nos para confirmar se servimos a sua localização específica 
            e para saber mais sobre os nossos serviços na sua área.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+351932591075"
              className="bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#B39DDB' }}
            >
              📞 Ligar Agora
            </a>
            <a
              href="mailto:info@bem-me-care.pt"
              className="px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#9C27B0', color: 'white' }}
            >
              📧 Enviar Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
