import { useState, useEffect } from "react";
import Orb from "./Orb/Orb";
import SplitText from "./SplitText/SplitText";

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-16 md:pt-28 -mt-2">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 left-0 w-screen h-60 bg-gradient-to-r from-primary to-accent filter blur-3xl opacity-20 animate-float1" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="relative z-10 max-w-2xl text-left mt-10 lg:mt-0 lg:flex-1">
          {/* Welcome Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center py-1.5 text-sm text-foreground backdrop-blur-sm">
              <span>Welcome to FairBasket</span>{" "}
              <span className="ml-2">🤖</span>
            </div>
          </div>

          {/* Hero Content */}
          <SplitText/>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground backdrop-blur-sm">
            Use AI-driven scanning to identify products, compare today's prices,
            get retailer insights, and ensure fast delivery while saving money.
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105">
              Start Now <span className="ml-2">📊</span>
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: "500,000+", label: "Active Users" },
              { value: "50,000+", label: "Registered Shops" },
              { value: "20,000+", label: "Delivery Agents" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-all duration-300 p-4 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Orb */}
        <div className="flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px] w-full lg:w-1/2 z-10 mt-10 lg:mt-0">
            <Orb />
        </div>
      </div>
    </div>
  );
}

export default Hero;