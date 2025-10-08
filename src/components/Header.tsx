import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const headerLogo = useQuery(api.logos.getActiveLogo, { type: "header" });

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre Nós" },
    { id: "services", label: "Serviços" },
    { id: "areas", label: "Áreas" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            {headerLogo?.imageUrl ? (
              <img 
                src={headerLogo.imageUrl} 
                alt="Bem-Me-Care" 
                className="h-12 w-auto"
              />
            ) : (
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#B39DDB' }}>
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold" style={{ color: '#B39DDB' }}>
                    Bem-Me-Care
                  </h1>
                  <p className="text-xs text-gray-500">Cuidados Domiciliários</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="tel:+351932591075"
              className="text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#B39DDB' }}
            >
              📞 932 591 075
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
