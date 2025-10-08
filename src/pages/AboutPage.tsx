interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: "❤️",
      title: "Empatia",
      description: "Compreendemos as necessidades únicas de cada pessoa e família"
    },
    {
      icon: "🤝",
      title: "Confiança",
      description: "Construímos relações baseadas na transparência e honestidade"
    },
    {
      icon: "🏆",
      title: "Excelência",
      description: "Comprometemo-nos com os mais altos padrões de qualidade"
    },
    {
      icon: "🌟",
      title: "Dignidade",
      description: "Respeitamos a autonomia e dignidade de cada pessoa"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Bem-Me-Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma empresa jovem e cheia de coração, criada para fazer a diferença no cuidado domiciliário aos nossos idosos no distrito do Porto e nos concelhos de Espinho e Santa Maria da Feira. Aqui, o que mais importa não é o lucro, mas o verdadeiro desejo de cuidar com carinho, respeito e dedicação. A nossa equipa é experiente, certificada e está sempre pronta para oferecer apoio próximo, atento e personalizado, como se cada utente fosse da nossa própria família. Estamos aqui para cuidar, escutar e fazer companhia, porque cada idoso merece viver com dignidade, conforto e amor.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Nossa História
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Bem-Me-Care nasceu do sonho de oferecer cuidados personalizados e de excelência a idosos, no aconchego e segurança do seu próprio lar.
                </p>
                <p>
                  Fundada recentemente, a nossa empresa cresceu com o compromisso de romper com os modelos tradicionais, colocando sempre o carinho e a dignidade no centro do nosso trabalho
                </p>
                <p>
                  Estamos em constante evolução, dedicados a oferecer um apoio humano, atento e especializado, que faz a verdadeira diferença na vida dos nossos utentes e das suas famílias.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-xl text-center" style={{ backgroundColor: '#F3E5F5' }}>
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Mais de 500 Famílias Atendidas
              </h3>
              <p className="text-gray-600">
                Ao longo dos anos, os nossos profissionais tiveram o privilégio de cuidar de mais de 500 famílias, 
                construindo relações de confiança duradouras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Nossa Missão</h3>
              <p className="text-gray-600">
                Proporcionar cuidados domiciliários de excelência, promovendo a autonomia, 
                dignidade e bem-estar dos nossos utentes, permitindo-lhes permanecer no 
                conforto e segurança das suas próprias casas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a empresa de referência das famílias em apoio domiciliário na região Norte, 
                reconhecida pela qualidade dos nossos serviços, pela dedicação da nossa equipa 
                e pela confiança das famílias que servimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Princípios que orientam o nosso trabalho diário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F3E5F5' }}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A nossa equipa é formada por profissionais qualificados em enfermagem, medicina, 
              auxiliares de ação médica, gestores de clientes e assistentes sociais. Unidos pelo 
              compromisso com a qualidade, o cuidado e o atendimento humanizado, trabalhamos para 
              oferecer um serviço confiável e acolhedor.
            </p>
          </div>

          {/* Professional Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enfermagem
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Profissionais de enfermagem especializados em cuidados geriátricos e domiciliários, 
                garantindo assistência clínica de qualidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Medicina
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Médicos experientes que supervisionam os cuidados de saúde e garantem 
                o acompanhamento clínico adequado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Auxiliares de Ação Médica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Técnicos qualificados que prestam apoio direto nos cuidados pessoais 
                e atividades da vida diária.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gestores de Clientes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Profissionais dedicados ao relacionamento com as famílias, coordenando 
                serviços e garantindo a satisfação dos utentes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Assistentes Sociais
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Especialistas em apoio psicossocial que ajudam na integração social 
                e no bem-estar emocional dos utentes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F3E5F5' }}>
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Coordenação
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Equipa de coordenação que supervisiona a qualidade dos serviços 
                e garante a excelência no atendimento.
              </p>
            </div>
          </div>

          {/* Team Commitment */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#B39DDB' }}>
                <span className="text-3xl text-white">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Compromisso com a Excelência
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Todos os nossos profissionais são cuidadosamente selecionados e recebem formação contínua 
                para garantir os mais altos padrões de qualidade. O nosso compromisso é oferecer um 
                atendimento humanizado, respeitoso e competente, onde cada utente é tratado com a dignidade 
                e carinho que merece.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
