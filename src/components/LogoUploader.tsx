import React, { useState, useEffect } from "react";
import { toast } from "sonner";

interface LogoUploaderProps {
  onLogoUpdate?: (logoUrl: string | null) => void;
  storageKey?: string;
  title?: string;
  description?: string;
}

export default function LogoUploader({ 
  onLogoUpdate, 
  storageKey = 'bem-me-care-logo',
  title = 'Gestão do Logotipo',
  description = 'Carregar e gerir o logotipo'
}: LogoUploaderProps) {
  const [logo, setLogo] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Load saved logo from localStorage on component mount
  useEffect(() => {
    const savedLogo = localStorage.getItem(storageKey);
    if (savedLogo) {
      setLogo(savedLogo);
      onLogoUpdate?.(savedLogo);
    }
  }, [onLogoUpdate, storageKey]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor, selecione apenas ficheiros de imagem.');
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        toast.error('O ficheiro deve ter menos de 2MB.');
        return;
      }

      setIsUploading(true);
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const logoUrl = reader.result as string;
        setLogo(logoUrl);
        
        // Save to localStorage
        localStorage.setItem(storageKey, logoUrl);
        
        // Notify parent component
        onLogoUpdate?.(logoUrl);
        
        setIsUploading(false);
        toast.success('Logotipo atualizado com sucesso!');
      };
      
      reader.onerror = () => {
        setIsUploading(false);
        toast.error('Erro ao carregar o ficheiro.');
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    localStorage.removeItem(storageKey);
    onLogoUpdate?.(null);
    toast.success('Logotipo removido com sucesso!');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      {/* Logo Preview */}
      <div className="mb-6 flex justify-center">
        {logo ? (
          <div className="relative">
            <img
              src={logo}
              alt="Logotipo da Bem-Me-Care"
              className="h-24 w-auto object-contain max-w-48"
            />
            <button
              onClick={handleRemoveLogo}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
              title="Remover logotipo"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="h-24 w-24 flex items-center justify-center rounded-lg text-gray-400 border-2 border-dashed border-gray-300" style={{ backgroundColor: '#F3E5F5' }}>
            <div className="text-center">
              <div className="text-2xl mb-1">🖼️</div>
              <div className="text-xs">Sem logo</div>
            </div>
          </div>
        )}
      </div>

      {/* Upload Controls */}
      <div className="space-y-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id={`logoUpload-${storageKey}`}
          disabled={isUploading}
        />
        
        <label
          htmlFor={`logoUpload-${storageKey}`}
          className={`block w-full text-center cursor-pointer px-4 py-3 rounded-lg font-medium transition-colors ${
            isUploading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'text-white hover:opacity-90'
          }`}
          style={{ backgroundColor: isUploading ? undefined : '#B39DDB' }}
        >
          {isUploading ? 'A carregar...' : logo ? 'Alterar Logotipo' : 'Carregar Logotipo'}
        </label>

        {logo && (
          <button
            onClick={handleRemoveLogo}
            className="w-full px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
          >
            Remover Logotipo
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>• Formatos aceites: JPG, PNG, GIF, SVG</p>
        <p>• Tamanho máximo: 2MB</p>
        <p>• Recomendado: 200x80px ou similar</p>
      </div>
    </div>
  );
}
