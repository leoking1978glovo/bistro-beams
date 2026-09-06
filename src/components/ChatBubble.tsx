import { useState, useEffect, useCallback } from "react";
import { MessageCircle, X, Minimize2 } from "lucide-react";

interface ChatBubbleProps {
  agentUrl?: string;
  title?: string;
  bubbleText?: string;
  position?: "bottom-right" | "bottom-left";
}

export default function ChatBubble({
  agentUrl = "https://www.google.com",
  title = "Agente Virtual",
  bubbleText = "¿Necesitas ayuda?",
  position = "bottom-right",
}: ChatBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsLoaded(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) setIsLoaded(false);
      return !prev;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const positionClasses = position === "bottom-right" ? "right-5" : "left-5";

  return (
    <>
      {isOpen && (
        <div
          className={`fixed bottom-24 ${positionClasses} z-50 flex h-[550px] max-h-[80vh] w-[380px] max-w-[90vw] animate-in flex-col overflow-hidden rounded-2xl border border-[#2a2a32] shadow-2xl fade-in slide-in-from-bottom-10 duration-300`}
        >
          <div className="flex items-center justify-between border-b border-[#2a2a32] bg-[#18181f] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-[#ff5f57]" />
                <div className="size-3 rounded-full bg-[#febc2e]" />
                <div className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 text-sm font-semibold text-[#f0f0f5]">
                {title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-[#8888a0] transition-colors hover:bg-[#2a2a32] hover:text-[#f0f0f5]"
                title="Minimizar"
                type="button"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={handleClose}
                className="rounded-lg p-1.5 text-[#8888a0] transition-colors hover:bg-[#2a2a32] hover:text-[#f0f0f5]"
                title="Cerrar"
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="relative flex-1 bg-[#0f0f13]">
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#8888a0]">
                <div className="size-8 animate-spin rounded-full border-2 border-[#2a2a32] border-t-[#ff6b35]" />
                <span className="text-sm">Cargando agente...</span>
              </div>
            )}
            <iframe
              src={agentUrl}
              className="size-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              onLoad={() => setIsLoaded(true)}
              title={title}
            />
          </div>

          <div className="border-t border-[#2a2a32] bg-[#18181f] px-4 py-2 text-center">
            <span className="text-xs text-[#66667a]">Powered by Lab del Chef</span>
          </div>
        </div>
      )}

      <div
        className={`fixed bottom-5 ${positionClasses} z-50 flex items-end gap-3`}
      >
        {showTooltip && !isOpen && (
          <div className="mb-3 max-w-[200px] animate-in rounded-xl rounded-br-sm border border-[#2a2a32] bg-[#18181f] px-4 py-2.5 shadow-lg fade-in slide-in-from-right-5 duration-500">
            <p className="text-sm font-medium text-[#f0f0f5]">{bubbleText}</p>
            <div className="absolute -bottom-1.5 right-0 size-3 translate-x-1/2 rotate-45 border-b border-r border-[#2a2a32] bg-[#18181f]" />
          </div>
        )}

        <button
          onClick={handleToggle}
          className={`group relative flex size-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen
              ? "rotate-90 bg-[#2a2a32]"
              : "bg-[#ff6b35] shadow-xl shadow-[#ff6b35]/30 hover:bg-[#e55a2e]"
          }`}
          type="button"
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {isOpen ? (
            <X size={24} className="text-[#f0f0f5]" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}

          {!isOpen && (
            <>
              <span className="absolute inset-0 animate-ping rounded-full bg-[#ff6b35] opacity-20" />
              <span className="absolute -right-1 -top-1 size-4 rounded-full border-2 border-[#0f0f13] bg-[#22c55e]" />
            </>
          )}
        </button>
      </div>
    </>
  );
}
