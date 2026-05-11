import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

export default function TeamBuiltForResults() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            headline="A Team Built for Results"
            description="Our people are our product. Meet the professionals dedicated to connecting exceptional IT talent with forward-thinking companies."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <FadeIn delay={100} direction="up">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 group">
              <img
                src="/Career/ai4image.jpg"
                alt="Collaborative Team Culture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-bold text-lg">
                  Collaborative Team Culture
                </h3>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 group">
              <img
                src="/Career/ai6image.jpg"
                alt="Expert Talent Network"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-bold text-lg">
                  Expert Talent Network
                </h3>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
