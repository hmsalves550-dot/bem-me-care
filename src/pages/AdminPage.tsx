import { useState, useRef } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface AdminPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function AdminPage({ onNavigate, onLogout }: AdminPageProps) {
  const [activeTab, setActiveTab] = useState<"carousel" | "pricing" | "logos">("carousel");
  const [showSlideForm, setShowSlideForm] = useState(false);
  const [editingSlide, setEditingSlide] = useState<any>(null);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Carousel data and mutations
  const slides = useQuery(api.carousel.getAllSlides) || [];
  const createSlide = useMutation(api.carousel.createSlide);
  const updateSlide = useMutation(api.carousel.updateSlide);
  const deleteSlide = useMutation(api.carousel.deleteSlide);
  const toggleSlideActive = useMutation(api.carousel.toggleSlideActive);
  const generateUploadUrl = useMutation(api.carousel.generateUploadUrl);

  // Pricing data and mutations
  const pricing = useQuery(api.pricing.getAdminPricing) || [];
  const upsertServicePricing = useMutation(api.pricing.upsertServicePricing);
  const deleteServicePricing = useMutation(api.pricing.deleteServicePricing);
  const initializeDefaultPricing = useMutation(api.pricing.initializeDefaultPricing);

  // Logo data and mutations
  const logos = useQuery(api.logos.getAllLogos) || [];
  const createLogo = useMutation(api.logos.createLogo);
  const updateLogo = useMutation(api.logos.updateLogo);
  const deleteLogo = useMutation(api.logos.deleteLogo);
  const setActiveLogo = useMutation(api.logos.setActiveLogo);
  const generateLogoUploadUrl = useMutation(api.logos.generateUploadUrl);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Painel de Administração</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate("home")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Voltar ao Site
              </button>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}>
          {notification.message}
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("carousel")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "carousel"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Carrossel da Página Inicial
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "pricing"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Preços dos Serviços
              </button>
              <button
                onClick={() => setActiveTab("logos")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "logos"
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Gestão de Logos
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "carousel" && (
              <CarouselManager
                slides={slides}
                showSlideForm={showSlideForm}
                setShowSlideForm={setShowSlideForm}
                editingSlide={editingSlide}
                setEditingSlide={setEditingSlide}
                createSlide={createSlide}
                updateSlide={updateSlide}
                deleteSlide={deleteSlide}
                toggleSlideActive={toggleSlideActive}
                generateUploadUrl={generateUploadUrl}
                showNotification={showNotification}
              />
            )}

            {activeTab === "pricing" && (
              <PricingManager
                pricing={pricing}
                upsertServicePricing={upsertServicePricing}
                deleteServicePricing={deleteServicePricing}
                initializeDefaultPricing={initializeDefaultPricing}
                showNotification={showNotification}
              />
            )}

            {activeTab === "logos" && (
              <LogoManager
                logos={logos}
                createLogo={createLogo}
                updateLogo={updateLogo}
                deleteLogo={deleteLogo}
                setActiveLogo={setActiveLogo}
                generateUploadUrl={generateLogoUploadUrl}
                showNotification={showNotification}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Logo Manager Component
function LogoManager({
  logos,
  createLogo,
  updateLogo,
  deleteLogo,
  setActiveLogo,
  generateUploadUrl,
  showNotification,
}: any) {
  const [showForm, setShowForm] = useState(false);
  const [editingLogo, setEditingLogo] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "header",
  });
  const [uploadedImageId, setUploadedImageId] = useState<Id<"_storage"> | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const logoTypes = [
    { value: "header", label: "Logo do Cabeçalho" },
    { value: "footer", label: "Logo do Rodapé" },
    { value: "main", label: "Logo Principal" },
  ];

  const resetForm = () => {
    setFormData({ name: "", type: "header" });
    setUploadedImageId(null);
    setEditingLogo(null);
    setShowForm(false);
  };

  const handleEdit = (logo: any) => {
    setFormData({
      name: logo.name,
      type: logo.type,
    });
    setUploadedImageId(logo.imageId);
    setEditingLogo(logo);
    setShowForm(true);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (result.ok) {
        const { storageId } = await result.json();
        setUploadedImageId(storageId);
        showNotification("success", "Imagem carregada com sucesso!");
      }
    } catch (error) {
      showNotification("error", "Erro ao carregar imagem");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedImageId) {
      showNotification("error", "Por favor, selecione uma imagem");
      return;
    }

    try {
      if (editingLogo) {
        await updateLogo({
          id: editingLogo._id,
          name: formData.name,
          imageId: uploadedImageId,
        });
        showNotification("success", "Logo atualizado com sucesso!");
      } else {
        await createLogo({
          name: formData.name,
          type: formData.type,
          imageId: uploadedImageId,
        });
        showNotification("success", "Logo criado com sucesso!");
      }
      resetForm();
    } catch (error) {
      showNotification("error", "Erro ao salvar logo");
    }
  };

  const handleDelete = async (logoId: Id<"logos">) => {
    if (confirm("Tem certeza que deseja excluir este logo?")) {
      try {
        await deleteLogo({ id: logoId });
        showNotification("success", "Logo excluído com sucesso!");
      } catch (error) {
        showNotification("error", "Erro ao excluir logo");
      }
    }
  };

  const handleSetActive = async (logoId: Id<"logos">) => {
    try {
      await setActiveLogo({ id: logoId });
      showNotification("success", "Logo ativado com sucesso!");
    } catch (error) {
      showNotification("error", "Erro ao ativar logo");
    }
  };

  const getLogosByType = (type: string) => {
    return logos.filter((logo: any) => logo.type === type);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gerenciar Logos</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          + Adicionar Logo
        </button>
      </div>

      {/* Logo Form */}
      {showForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4">
            {editingLogo ? "Editar Logo" : "Novo Logo"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Logo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ex: Logo Principal Bem-Me-Care"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Logo *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={!!editingLogo}
                >
                  {logoTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Imagem do Logo *
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              {isUploading && <p className="text-sm text-gray-500 mt-1">Carregando imagem...</p>}
              {uploadedImageId && <p className="text-sm text-green-600 mt-1">✓ Imagem carregada</p>}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {editingLogo ? "Atualizar" : "Criar"} Logo
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Logos by Type */}
      <div className="space-y-8">
        {logoTypes.map((type) => (
          <div key={type.value} className="bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">{type.label}</h3>
            </div>
            <div className="p-4">
              {getLogosByType(type.value).length === 0 ? (
                <p className="text-gray-500 text-center py-4">Nenhum logo encontrado para este tipo</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getLogosByType(type.value).map((logo: any) => (
                    <div key={logo._id} className="border border-gray-200 rounded-lg p-4">
                      <div className="aspect-w-16 aspect-h-9 mb-3">
                        <img
                          src={logo.imageUrl}
                          alt={logo.name}
                          className="w-full h-24 object-contain bg-gray-50 rounded"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{logo.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          logo.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {logo.isActive ? "Ativo" : "Inativo"}
                        </span>
                      </div>
                      <div className="flex justify-between space-x-2">
                        {!logo.isActive && (
                          <button
                            onClick={() => handleSetActive(logo._id)}
                            className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
                          >
                            Ativar
                          </button>
                        )}
                        <button
                          onClick={() => handleEdit(logo)}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(logo._id)}
                          className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Keep existing CarouselManager and PricingManager components (unchanged)
function CarouselManager({
  slides,
  showSlideForm,
  setShowSlideForm,
  editingSlide,
  setEditingSlide,
  createSlide,
  updateSlide,
  deleteSlide,
  toggleSlideActive,
  generateUploadUrl,
  showNotification,
}: any) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    ctaText: "",
    ctaLink: "",
    backgroundColor: "#BBA6DA",
    textColor: "#FFFFFF",
  });
  const [uploadedImageId, setUploadedImageId] = useState<Id<"_storage"> | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      ctaText: "",
      ctaLink: "",
      backgroundColor: "#BBA6DA",
      textColor: "#FFFFFF",
    });
    setUploadedImageId(null);
    setEditingSlide(null);
    setShowSlideForm(false);
  };

  const handleEdit = (slide: any) => {
    setFormData({
      title: slide.title,
      subtitle: slide.subtitle || "",
      description: slide.description,
      ctaText: slide.ctaText,
      ctaLink: slide.ctaLink || "",
      backgroundColor: slide.backgroundColor,
      textColor: slide.textColor,
    });
    setUploadedImageId(slide.imageId);
    setEditingSlide(slide);
    setShowSlideForm(true);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (result.ok) {
        const { storageId } = await result.json();
        setUploadedImageId(storageId);
        showNotification("success", "Imagem carregada com sucesso!");
      }
    } catch (error) {
      showNotification("error", "Erro ao carregar imagem");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSlide) {
        await updateSlide({
          id: editingSlide._id,
          ...formData,
          imageId: uploadedImageId,
        });
        showNotification("success", "Slide atualizado com sucesso!");
      } else {
        await createSlide({
          ...formData,
          imageId: uploadedImageId,
        });
        showNotification("success", "Slide criado com sucesso!");
      }
      resetForm();
    } catch (error) {
      showNotification("error", "Erro ao salvar slide");
    }
  };

  const handleDelete = async (slideId: Id<"carouselSlides">) => {
    if (confirm("Tem certeza que deseja excluir este slide?")) {
      try {
        await deleteSlide({ id: slideId });
        showNotification("success", "Slide excluído com sucesso!");
      } catch (error) {
        showNotification("error", "Erro ao excluir slide");
      }
    }
  };

  const handleToggleActive = async (slideId: Id<"carouselSlides">) => {
    try {
      await toggleSlideActive({ id: slideId });
      showNotification("success", "Status do slide atualizado!");
    } catch (error) {
      showNotification("error", "Erro ao atualizar status");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gerenciar Carrossel</h2>
        <button
          onClick={() => setShowSlideForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          + Adicionar Slide
        </button>
      </div>

      {/* Slide Form */}
      {showSlideForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4">
            {editingSlide ? "Editar Slide" : "Novo Slide"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subtítulo
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição *
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Texto do Botão *
                </label>
                <input
                  type="text"
                  required
                  value={formData.ctaText}
                  onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Link do Botão
                </label>
                <input
                  type="text"
                  value={formData.ctaLink}
                  onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="contact, about, services, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cor de Fundo
                </label>
                <input
                  type="color"
                  value={formData.backgroundColor}
                  onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                  className="w-full h-10 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cor do Texto
                </label>
                <input
                  type="color"
                  value={formData.textColor}
                  onChange={(e) => setFormData({ ...formData, textColor: e.target.value })}
                  className="w-full h-10 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Imagem de Fundo
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              {isUploading && <p className="text-sm text-gray-500 mt-1">Carregando imagem...</p>}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {editingSlide ? "Atualizar" : "Criar"} Slide
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Slides List */}
      <div className="space-y-4">
        {slides.map((slide: any) => (
          <div key={slide._id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{slide.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    slide.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {slide.isActive ? "Ativo" : "Inativo"}
                  </span>
                </div>
                {slide.subtitle && (
                  <p className="text-sm text-gray-600 mb-1">{slide.subtitle}</p>
                )}
                <p className="text-sm text-gray-500 mb-2">{slide.description}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>Botão: {slide.ctaText}</span>
                  <span>Ordem: {slide.order}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => handleToggleActive(slide._id)}
                  className={`px-3 py-1 text-xs rounded ${
                    slide.isActive
                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                  } transition-colors`}
                >
                  {slide.isActive ? "Desativar" : "Ativar"}
                </button>
                <button
                  onClick={() => handleEdit(slide)}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(slide._id)}
                  className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
        {slides.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum slide encontrado. Adicione o primeiro slide para começar.
          </div>
        )}
      </div>
    </div>
  );
}

// Pricing Manager Component
function PricingManager({
  pricing,
  upsertServicePricing,
  deleteServicePricing,
  initializeDefaultPricing,
  showNotification,
}: any) {
  const [editingService, setEditingService] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceId: "",
    serviceName: "",
    category: "",
    basePrice: 0,
    unit: "hora",
    description: "",
    isActive: true,
  });

  const categories = [...new Set(pricing.map((p: any) => p.category as string))] as string[];

  const resetForm = () => {
    setFormData({
      serviceId: "",
      serviceName: "",
      category: "",
      basePrice: 0,
      unit: "hora",
      description: "",
      isActive: true,
    });
    setEditingService(null);
    setShowForm(false);
  };

  const handleEdit = (service: any) => {
    setFormData({
      serviceId: service.serviceId,
      serviceName: service.serviceName,
      category: service.category,
      basePrice: service.basePrice,
      unit: service.unit,
      description: service.description || "",
      isActive: service.isActive,
    });
    setEditingService(service);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await upsertServicePricing(formData);
      showNotification("success", "Preço atualizado com sucesso!");
      resetForm();
    } catch (error) {
      showNotification("error", "Erro ao salvar preço");
    }
  };

  const handleDelete = async (serviceId: Id<"servicePricing">) => {
    if (confirm("Tem certeza que deseja excluir este serviço?")) {
      try {
        await deleteServicePricing({ id: serviceId });
        showNotification("success", "Serviço excluído com sucesso!");
      } catch (error) {
        showNotification("error", "Erro ao excluir serviço");
      }
    }
  };

  const handleInitializeDefaults = async () => {
    try {
      await initializeDefaultPricing();
      showNotification("success", "Preços padrão inicializados!");
    } catch (error) {
      showNotification("error", "Erro ao inicializar preços");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gerenciar Preços</h2>
        <div className="space-x-3">
          {pricing.length === 0 && (
            <button
              onClick={handleInitializeDefaults}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Inicializar Preços Padrão
            </button>
          )}
          <button
            onClick={() => setShowForm(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            + Adicionar Serviço
          </button>
        </div>
      </div>

      {/* Service Form */}
      {showForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4">
            {editingService ? "Editar Serviço" : "Novo Serviço"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID do Serviço *
                </label>
                <input
                  type="text"
                  required
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="ex: higiene-pessoal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Serviço *
                </label>
                <input
                  type="text"
                  required
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoria *
                </label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preço Base (€) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.basePrice}
                  onChange={(e) => setFormData({ ...formData, basePrice: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unidade *
                </label>
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="hora">por hora</option>
                  <option value="dia">por dia</option>
                  <option value="semana">por semana</option>
                  <option value="mes">por mês</option>
                  <option value="servico">por serviço</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">Serviço ativo</span>
              </label>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {editingService ? "Atualizar" : "Criar"} Serviço
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Pricing List by Category */}
      <div className="space-y-6">
        {categories.map((category: string) => (
          <div key={category} className="bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">{category}</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {pricing
                .filter((service: any) => service.category === category)
                .map((service: any) => (
                  <div key={service._id} className="px-4 py-4 flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-gray-900">{service.serviceName}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          service.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {service.isActive ? "Ativo" : "Inativo"}
                        </span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                      )}
                      <div className="text-lg font-semibold text-purple-600 mt-2">
                        €{service.basePrice.toFixed(2)} {service.unit}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
        {pricing.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum serviço encontrado. Adicione serviços ou inicialize os preços padrão.
          </div>
        )}
      </div>
    </div>
  );
}
