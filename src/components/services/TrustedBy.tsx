import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

const logos = [
  {
    name: "Wells Fargo",
    subtitle: "Financial Services",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#D71E28] rounded-sm flex items-center justify-center mb-1">
        <span className="text-white font-black text-xs leading-tight text-center">WF</span>
      </div>
      <div className="text-sm font-black text-[#D71E28] leading-none tracking-tight">Wells Fargo</div>
    </div>
  },
  {
    name: "Western Alliance Bank",
    subtitle: "Banking",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#004990] rounded-sm flex items-center justify-center mb-1">
        <span className="text-white font-black text-xs leading-tight text-center">WAB</span>
      </div>
      <div className="text-xs font-black text-[#004990] leading-none tracking-tight text-center">Western Alliance</div>
    </div>
  },
  {
    name: "Synechron",
    subtitle: "Financial Technology",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="flex items-center gap-1 mb-1">
        <div className="w-2 h-6 bg-[#1E3A5F] rounded-sm"/>
        <div className="w-2 h-4 bg-[#FF6600] rounded-sm"/>
        <div className="w-2 h-6 bg-[#1E3A5F] rounded-sm"/>
      </div>
      <div className="text-sm font-bold text-[#1E3A5F] leading-none tracking-wide">Synechron</div>
    </div>
  },
  {
    name: "Photon",
    subtitle: "Digital Services",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066CC] to-[#00AAFF] flex items-center justify-center mb-1">
        <span className="text-white font-black text-sm">P</span>
      </div>
      <div className="text-sm font-black text-[#0066CC] leading-none tracking-tight">Photon</div>
    </div>
  },
  {
    name: "Girnar Soft",
    subtitle: "IT Solutions",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#2B5EA7] rounded-md flex items-center justify-center mb-1">
        <span className="text-white font-black text-sm">GS</span>
      </div>
      <div className="text-sm font-bold text-[#2B5EA7] leading-none tracking-tight">Girnar Soft</div>
    </div>
  },
  {
    name: "Gsspann Technologies",
    subtitle: "IT Services",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#E87722] rounded-md flex items-center justify-center mb-1">
        <span className="text-white font-black text-xs leading-tight text-center">GSS</span>
      </div>
      <div className="text-xs font-bold text-[#E87722] leading-none tracking-tight text-center">Gsspann Tech</div>
    </div>
  },
  {
    name: "State of Texas",
    subtitle: "Government",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="flex items-center gap-1 mb-1">
        <div className="w-4 h-8 bg-[#002868] rounded-l-sm"/>
        <div className="flex flex-col">
          <div className="w-6 h-4 bg-[#BF0A30]"/>
          <div className="w-6 h-4 bg-white border border-slate-200"/>
        </div>
        <svg className="w-4 h-4 text-yellow-500 absolute" viewBox="0 0 24 24" fill="currentColor" style={{position:'relative'}}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 3.3 2.4-7.4L2 8.4h7.6z"/>
        </svg>
      </div>
      <div className="text-xs font-bold text-[#002868] leading-none tracking-tight text-center">State of Texas</div>
    </div>
  },
  {
    name: "State of New York",
    subtitle: "Government",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#003580] rounded-full border-2 border-[#C8A951] flex items-center justify-center mb-1">
        <span className="text-[#C8A951] font-black text-sm">NY</span>
      </div>
      <div className="text-xs font-bold text-[#003580] leading-none tracking-tight text-center">State of New York</div>
    </div>
  },
  {
    name: "Randstad",
    subtitle: "Staffing & HR",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="flex items-end gap-0.5 mb-1 h-8">
        <div className="w-2.5 h-6 bg-[#2175D9] rounded-t-full"/>
        <div className="w-2.5 h-8 bg-[#2175D9] rounded-t-full"/>
        <div className="w-2.5 h-5 bg-[#2175D9] rounded-t-full"/>
      </div>
      <div className="text-sm font-bold text-[#2175D9] leading-none tracking-tight">Randstad</div>
    </div>
  },
  {
    name: "State of South Dakota",
    subtitle: "Government",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="w-10 h-10 bg-[#003DA5] rounded-full border-2 border-[#FFD700] flex items-center justify-center mb-1">
        <span className="text-[#FFD700] font-black text-sm">SD</span>
      </div>
      <div className="text-xs font-bold text-[#003DA5] leading-none tracking-tight text-center">State of S. Dakota</div>
    </div>
  },
  {
    name: "TCS",
    subtitle: "IT Consulting",
    svg: <div className="flex flex-col items-center mb-2">
      <div className="text-3xl font-black text-[#0070C0] mb-1 leading-none tracking-tight">TCS</div>
      <div className="w-10 h-1 bg-gradient-to-r from-[#0070C0] to-[#00AEEF] rounded-full"/>
    </div>
  },
  {
    name: "Deloitte",
    subtitle: "Consulting",
    svg: <div className="text-2xl font-black tracking-tight text-black flex items-center mb-2">Deloitte<span className="w-2.5 h-2.5 rounded-full bg-[#86BC25] ml-1"></span></div>
  },
  {
    name: "Accenture",
    subtitle: "Technology Services",
    svg: <div className="text-2xl font-black text-black flex items-center mb-2">accenture<span className="text-[#a100ff] text-xl font-light ml-1">&gt;</span></div>
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: company.colors.primary }}>
              Our Clients
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Trusted By Leading Organizations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We are proud to partner with some of the world's most respected organizations across finance, government, and technology.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, i) => (
            <FadeIn key={logo.name} delay={i * 50} direction="up">
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col items-center justify-center text-center h-48 group">
                <div className="transition-transform duration-300 group-hover:scale-110 flex flex-col items-center justify-center flex-1">
                  {logo.svg}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-slate-900">{logo.name}</h4>
                  <p className="text-xs text-slate-500">{logo.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
