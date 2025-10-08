import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import AreasPage from "./pages/AreasPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
    setCurrentPage("admin");
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentPage("home");
  };

  // Show admin login if trying to access admin without authentication
  if (currentPage === "admin" && !isAdminAuthenticated) {
    return <AdminLoginPage onLogin={handleAdminLogin} onNavigate={handleNavigate} />;
  }

  // Show admin page if authenticated
  if (currentPage === "admin" && isAdminAuthenticated) {
    return <AdminPage onNavigate={handleNavigate} onLogout={handleAdminLogout} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "areas":
        return <AreasPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Admin Access Button */}
      <button
        onClick={() => setCurrentPage("admin")}
        className="fixed bottom-4 right-4 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors text-xs"
        title="Admin"
      >
        🔐
      </button>
    </div>
  );
}

// Admin Login Component
function AdminLoginPage({ onLogin, onNavigate }: { onLogin: () => void; onNavigate: (page: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple password check
    if (password === "bemmecare2025") {
      onLogin();
    } else {
      setError("Password incorreta");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Acesso Administrativo</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Digite a password de administrador"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? "A verificar..." : "Entrar"}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => onNavigate("home")}
            className="text-purple-600 hover:text-purple-800 text-sm"
          >
            ← Voltar ao Site
          </button>
        </div>
      </div>
    </div>
  );
}
