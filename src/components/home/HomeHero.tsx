import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { company } from "../../config/company";

const carouselImages = [
  company.heroImage,
  company.hiringImage,
  company.servicesHeroImage,
  company.careersHeroImage,
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex transition-transform duration-1000 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 relative">
              <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(13,17,23,0.88) 0%, rgba(13,17,23,0.65) 55%, rgba(139,26,26,0.3) 100%)" }}
              />
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/20 hidden md:block"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/20 hidden md:block"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-red-600' : 'w-2.5 bg-white/60 hover:bg-white'}`}
            style={{ backgroundColor: i === currentIndex ? company.colors.primary : undefined }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="pointer-events-auto">
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-5 animate-fade-in-up" style={{ color: company.colors.accent }}>
              {company.tagline}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {company.headline.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {company.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-md transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ backgroundColor: company.colors.primary }}
              >
                Our Services <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-md border border-white/40 backdrop-blur-sm hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side Text / Watermark */}
          <div className="hidden lg:flex flex-col justify-center items-end relative pointer-events-none animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
             {/* Large Watermark Text */}
             <div className="absolute top-1/2 -translate-y-1/2 right-0 text-right whitespace-nowrap text-[5rem] xl:text-[6rem] font-black tracking-wider text-white/5 select-none z-0">
                SHADDAI TECHNOLOGIES INC
             </div>
             {/* Subtitle */}
             <h2 className="text-3xl xl:text-4xl font-light italic text-white/80 relative z-10 text-right leading-tight max-w-lg">
                Building High-Performance <br/> 
                <span className="font-bold not-italic" style={{ color: company.colors.accent }}>IT Talent Pipelines</span>
             </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
