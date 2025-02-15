import { useState, useEffect } from "react";

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-16 -mt-2 grid-background">
      {/* Floating Pictures */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          {/* Bottom Section Images */}
        <img
          src="./Hero1.webp" // Replace with your image path
          alt="Floating Image 1"
          className="absolute w-24 h-24 animate-float1 rounded-md transform rotate-6 object-cover"
          style={{ bottom: "20%", left: "35%" }}
          loading="lazy"
        />
        <img
          src="./Hero2.webp" // Replace with your image path
          alt="Floating Image 2"
          className="absolute w-20 h-20 animate-float2 rounded-md transform -rotate-3 object-cover"
          style={{ bottom: "25%", right: "10%" }}
          loading="lazy"
        />
        <img
          src="./Hero3.webp" // Replace with your image path
          alt="Floating Image 3"
          className="absolute w-16 h-16 animate-float3 rounded-md transform rotate-12 object-cover"
          style={{ bottom: "15%", left: "20%" }}
          loading="lazy"
        />
        <img
          src="./Hero4.webp" // Replace with your image path
          alt="Floating Image 4"
          className="absolute w-28 h-28 animate-float4 rounded-md transform -rotate-6 object-cover"
          style={{ bottom: "30%", left: "10%" }}
          loading="lazy"
        />
        <img
          src="./Hero5.webp" // Replace with your image path
          alt="Floating Image 5"
          className="absolute w-24 h-24 animate-float1 rounded-md transform rotate-3 object-cover"
          style={{ bottom: "10%", right: "20%" }}
          loading="lazy"
        />
        <img
          src="./Hero6.webp" // Replace with your image path
          alt="Floating Image 6"
          className="absolute w-20 h-20 animate-float2 rounded-md transform -rotate-12 object-cover"
          style={{ bottom: "35%", left: "30%" }}
          loading="lazy"
        />
        <img
          src="./Hero7.webp" // Replace with your image path
          alt="Floating Image 7"
          className="absolute w-16 h-16 animate-float3 rounded-md transform rotate-6 object-cover"
          style={{ bottom: "5%", right: "45%" }}
          loading="lazy"
        />
        <img
          src="./Hero8.webp" // Replace with your image path
          alt="Floating Image 8"
          className="absolute w-28 h-28 animate-float4 rounded-md transform -rotate-3 object-cover"
          style={{ bottom: "20%", right: "35%" }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        {/* Welcome Badge */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-foreground">
            <span>Welcome to FairBasket</span>
            <span className="ml-2">🛒</span>
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