import { useState, useEffect } from "react";

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Image Data for Floating Pictures
  const floatingImages = [
    { src: "./Hero1.webp", alt: "Farmers' Market", style: { bottom: "20%", left: "35%" }, animation: "animate-float1" },
    { src: "./Hero2.webp", alt: "Fresh Produce", style: { bottom: "25%", right: "10%" }, animation: "animate-float2" },
    { src: "./Hero3.webp", alt: "Organic Goods", style: { bottom: "15%", left: "20%" }, animation: "animate-float3" },
    { src: "./Hero4.webp", alt: "Local Harvest", style: { bottom: "30%", left: "10%" }, animation: "animate-float4" },
    { src: "./Hero5.webp", alt: "Healthy Choices", style: { bottom: "10%", right: "20%" }, animation: "animate-float1" },
    { src: "./Hero6.webp", alt: "Community Farming", style: { bottom: "35%", left: "30%" }, animation: "animate-float2" },
    { src: "./Hero7.webp", alt: "Sustainable Crops", style: { bottom: "5%", right: "45%" }, animation: "animate-float3" },
    { src: "./Hero8.webp", alt: "Wholesale Farming", style: { bottom: "20%", right: "35%" }, animation: "animate-float4" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-16 -mt-2 grid-background">
      {/* Floating Pictures */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        {floatingImages.map((img, index) => (
          <img
            key={img.src} // Using src as a unique key
            src={img.src}
            alt={img.alt}
            className={`absolute w-24 h-24 rounded-md transform object-cover ${img.animation}`}
            style={img.style}
            loading="lazy"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        {/* Welcome Badge */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-foreground">
            <span>Welcome to FairBasket</span> <span className="ml-2">🛒</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Connecting Farmers & Retailers Directly
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Empowering local producers and cutting out the middleman to bring you fresh, affordable groceries.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Start Now <span className="ml-2">🛍️</span>
            </button>
            <button className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats & Logos */}
        <div className="mt-20">
          <div className="mb-8 text-center">
            <div className="text-4xl font-bold text-foreground">10,000+ Farmers</div>
            <div className="mt-2 text-sm text-muted-foreground">Growing & selling fresh produce</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
