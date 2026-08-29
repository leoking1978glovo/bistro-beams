import { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';

interface ChatBubbleProps {
  agentUrl?: string;          // URL del agente/web que quieres incrustar
  title?: string;             // Título que aparece arriba del panel
  bubbleText?: string;        // Texto opcional que flota junto a la burbuja
  position?: 'bottom-right' | 'bottom-left';
}

export default function ChatBubble({
  agentUrl = 'https://www.google.com', // ← REEMPLAZA CON LA URL DE TU AGENTE
  title = 'Agente Virtual',
  bubbleText = '¿Necesitas ayuda?',
  position = 'bottom-right',
}: ChatBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Ocultar el tooltip de texto después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const positionClasses = position === 'bottom-right' 
    ? 'right-5' 
    : 'left-5';

  return (
    <>
      {/* PANEL DEL AGENTE */}
      {isOpen && (
        <div className={`fixed bottom-24 ${positionClasses} z-50 w-[380px] h-[550px] max-w-[90vw] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-[#2a2a32] shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-300`}>
          
          {/* Barra de navegador mockup */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#18181f] border-b border-[#2a2a32]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 text-sm font-semibold text-[#f0f0f5]">{title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[#2a2a32] transition-colors text-[#8888a0] hover:text-[#f0f0f5]"
                title="Minimizar"
              >
                <Minimize2 size={16} />
              </button>
              <button 
                onClick={() => { setIsOpen(false); setIsLoaded(false); }}
                className="p-1.5 rounded-lg hover:bg-[#2a2a32] transition-colors text-[#8888a0] hover:text-[#f0f0f5]"
                title="Cerrar"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Área del iframe */}
          <div className="flex-1 relative bg-[#0f0f13]">
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#8888a0]">
                <div className="w-8 h-8 border-2 border-[#2a2a32] border-t-[#ff6b35] rounded-full animate-spin" />
                <span className="text-sm">Cargando agente...</span>
              </div>
            )}
            <iframe
              src={agentUrl}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onLoad={() => setIsLoaded(true)}
              title={title}
            />
          </div>

          {/* Footer del panel */}
          <div className="px-4 py-2 bg-[#18181f] border-t border-[#2a2a32] text-center">
            <span className="text-xs text-[#66667a]">Powered by Lab del Chef</span>
          </div>
        </div>
      )}

      {/* BURBUJA FLOTANTE */}
      <div className={`fixed bottom-5 ${positionClasses} z-50 flex items-end gap-3`}>
        
        {/* Tooltip de texto */}
        {showTooltip && !isOpen && (
          <div className="mb-3 px-4 py-2.5 bg-[#18181f] border border-[#2a2a32] rounded-xl rounded-br-sm shadow-lg animate-in fade-in slide-in-from-right-5 duration-500 max-w-[200px]">
            <p className="text-sm text-[#f0f0f5] font-medium">{bubbleText}</p>
            <div className="absolute -bottom-1.5 right-0 w-3 h-3 bg-[#18181f] border-r border-b border-[#2a2a32] rotate-45 transform translate-x-1/2" />
          </div>
        )}

        {/* Botón circular */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setIsLoaded(false);
          }}
          className={`group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen 
              ? 'bg-[#2a2a32] rotate-90' 
              : 'bg-[#ff6b35] hover:bg-[#e55a2e] shadow-[#ff6b35]/30 shadow-xl'
          }`}
        >
          {isOpen ? (
            <X size={24} className="text-[#f0f0f5]" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
          
          {/* Pulso animado cuando está cerrado */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#ff6b35] animate-ping opacity-20" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-[#0f0f13]" />
            </>
          )}
        </button>
      </div>
    </>
  );
}