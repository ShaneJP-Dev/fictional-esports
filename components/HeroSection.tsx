import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('images/hero-bg.png')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-orange-300 rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-70" />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-50" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-orange-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-900/10" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Legends of Victory </span>
            <span className="block">
              <span className="text-white">Battle </span>
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow-lg"
                style={{ 
                  textShadow: '0 0 30px rgba(56, 189, 248, 0.5), 0 0 60px rgba(56, 189, 248, 0.3)' 
                }}
              >
                Royale
              </span>
              <span className="text-white"> Cup</span>
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Compete for glory. Only one can win.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0 min-w-[160px]"
          >
            Register Now
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-gray-300 text-white font-semibold px-8 py-4 text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-sm min-w-[160px]"
          >
            Register Now
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
      
      {/* Trophy glow effect */}
      <div className="absolute bottom-1/4 left-16 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse opacity-60" />
    </section>
  );
}