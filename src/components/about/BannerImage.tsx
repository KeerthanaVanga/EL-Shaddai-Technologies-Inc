export default function BannerImage() {
  return (
    <section className="relative h-64 md:h-96 w-full overflow-hidden">
      <img 
        src="/Career/ai8image.jpg" 
        alt="Team building partnerships" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide text-center drop-shadow-lg">
          Building Partnerships That Last
        </h2>
      </div>
    </section>
  );
}
