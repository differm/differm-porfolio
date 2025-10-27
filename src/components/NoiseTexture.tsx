"use client";

const NoiseTexture = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0,0,0,0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(0,0,0,0.02) 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, rgba(0,0,0,0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 100%, rgba(0,0,0,0.02) 0%, transparent 50%),
          radial-gradient(circle at 0% 0%, rgba(0,0,0,0.02) 0%, transparent 50%)
        `,
        backgroundSize: '200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px, 220px 220px',
        backgroundPosition: '0 0, 100px 100px, 50px 50px, 75px 75px, 125px 125px, 25px 25px',
        opacity: 0.4
      }}
    />
  );
};

export default NoiseTexture;
