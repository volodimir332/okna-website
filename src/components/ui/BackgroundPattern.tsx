"use client";

export function BackgroundPattern() {
  return (
    <div 
      className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      
      {/* Grid only at the top - Hero area, fades out smoothly */}
      <div 
        className="absolute top-0 left-0 right-0 h-[900px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
        }}
      />
      
      {/* Subtle colored spots - only at top */}
      <div className="absolute top-[150px] right-[15%] w-[250px] h-[250px] bg-[rgba(91,108,240,0.08)] rounded-full blur-[80px]" />
      <div className="absolute top-[300px] left-[65%] w-[200px] h-[200px] bg-[rgba(249,115,22,0.06)] rounded-full blur-[70px]" />
    </div>
  );
}
