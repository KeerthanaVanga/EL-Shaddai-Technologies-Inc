import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: company.colors.primary }}>
              Our Network
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Trusted By Leading Organizations</h2>
          </div>
        </FadeIn>
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
          {company.trustedBy.map((name, i) => (
            <FadeIn key={name} delay={i * 80} direction="up">
              <div className="text-xl sm:text-2xl font-black tracking-widest text-gray-200 hover:text-gray-500 transition-colors duration-300 cursor-default select-none">
                {name}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
