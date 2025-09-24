import Navigation from "./navigation"
import Theme from "./theme"
import Language from "./language"

interface HUDProps {
  children: React.ReactNode
}

export default function HUD({ children }: HUDProps) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Navigation en haut */}
        <div className="absolute top-6 left-10 right-10 pointer-events-auto">
          <Navigation />
        </div>
        
        {/* Contrôles en bas à droite */}
        <div className="absolute bottom-6 right-6 pointer-events-auto flex flex-col gap-4">
          <Theme />
        </div>
        <div className="absolute bottom-6 left-6 pointer-events-auto flex flex-col gap-4">
          <Language />
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10">
        {children}
      </div>
    </>
  )
}
