import { company } from "../../config/company";
import FadeIn from "../ui/FadeIn";

const logos = [
  { 
    name: "Microsoft", 
    subtitle: "Technology",
    svg: <svg viewBox="0 0 24 24" className="w-10 h-10 mb-2" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4z" fill="#f25022"/><path d="M24 11.4H12.6V0H24v11.4z" fill="#7fba00"/><path d="M11.4 24H0V12.6h11.4V24z" fill="#00a4ef"/><path d="M24 24H12.6V12.6H24V24z" fill="#ffb900"/></svg> 
  },
  { 
    name: "IBM", 
    subtitle: "Enterprise IT",
    svg: <div className="text-3xl font-black tracking-tighter text-[#0f62fe] mb-2 leading-none border-t-4 border-b-4 border-white border-dashed">IBM</div> 
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
  { 
    name: "Oracle", 
    subtitle: "Cloud & Database",
    svg: <div className="text-3xl font-black text-[#c74634] mb-2 leading-none tracking-tighter">ORACLE</div> 
  },
  { 
    name: "Cisco", 
    subtitle: "Networking",
    svg: <div className="flex flex-col items-center mb-2"><div className="flex items-end gap-1 mb-1 h-6"><div className="w-1.5 h-3 bg-[#049fd9]"/><div className="w-1.5 h-5 bg-[#049fd9]"/><div className="w-1.5 h-6 bg-[#049fd9]"/><div className="w-1.5 h-5 bg-[#049fd9]"/><div className="w-1.5 h-3 bg-[#049fd9]"/></div><div className="text-lg font-bold text-slate-800 leading-none tracking-widest">CISCO</div></div>
  },
  { 
    name: "SAP", 
    subtitle: "Enterprise Software",
    svg: <div className="w-14 h-8 bg-[#008fd3] flex items-center justify-center rounded-sm mb-2"><span className="text-white font-bold text-lg">SAP</span></div> 
  },
  { 
    name: "Infosys", 
    subtitle: "IT Services",
    svg: <div className="text-2xl font-bold text-[#007cc3] flex items-center mb-2">Infosys<span className="w-1.5 h-1.5 rounded-full bg-[#f89c1e] ml-1 mt-1"></span></div> 
  }
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: company.colors.primary }}>
              Our Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Trusted By Leading Organizations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We are proud to partner with some of the world's most respected technology and enterprise companies.
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
