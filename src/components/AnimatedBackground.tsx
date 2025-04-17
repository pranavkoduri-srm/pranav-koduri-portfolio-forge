
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background opacity-90"></div>
      
      {/* Purple glow */}
      <div className="absolute top-[10%] left-[15%] w-[35vw] h-[35vw] rounded-full bg-primary/20 filter blur-[120px] animate-pulse"></div>
      
      {/* Secondary glow */}
      <div className="absolute bottom-[15%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-primary/10 filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Small accent points */}
      <div className="hidden sm:block absolute top-[20%] right-[20%] w-1 h-1 rounded-full bg-primary"></div>
      <div className="hidden sm:block absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-primary/80"></div>
      <div className="hidden sm:block absolute top-[30%] right-[18%] w-1 h-1 rounded-full bg-primary/60"></div>
      <div className="hidden sm:block absolute bottom-[20%] left-[20%] w-1 h-1 rounded-full bg-primary"></div>
      <div className="hidden sm:block absolute bottom-[25%] left-[25%] w-2 h-2 rounded-full bg-primary/80"></div>
      <div className="hidden sm:block absolute bottom-[30%] left-[18%] w-1 h-1 rounded-full bg-primary/60"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default AnimatedBackground;
