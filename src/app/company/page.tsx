"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Calendar, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  PhoneCall, 
  Building2, 
  MapPin, 
  BookOpen, 
  Eye, 
  Globe, 
  Zap, 
  Milestone 
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactSection from "@/components/ContactSection";

export default function CompanyPage() {




  return (
    <div className="bg-white min-h-screen pt-12 pb-24 relative overflow-hidden text-slate-800">
      {/* Decorative premium blue gradients */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-50/20 rounded-full blur-[130px] pointer-events-none" />
      
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-white border-b border-slate-100/60">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50/60 text-blue-700 text-xs font-semibold mb-8 border border-blue-100/40">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse" />
              Company Overview & Investor Relations
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-slate-900 tracking-tight leading-[1.12] mb-6">
              Building AI Voice Infrastructure <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                For Indian Businesses.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
              CallArk helps businesses answer calls, capture leads, and automate customer conversations using AI voice agents.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:ansh@CallArk.ai?subject=CallArk%20Investor%20Inquiry"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto rounded-full px-8 h-14 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center font-medium"
                )}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Founder
              </a>
              <a 
                href="#"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto rounded-full px-8 h-14 text-base border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
                )}
              >
                <Calendar className="w-5 h-5 mr-2 text-slate-400" />
                Schedule Conversation
              </a>
            </div>
          </div>
        </div>
      </section>



      <div className="container relative mx-auto px-4 md:px-6 max-w-5xl pt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDEBAR: FOUNDER CARD */}
          <div id="founder" className="md:col-span-4 md:sticky md:top-28 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:border-blue-100/60 transition-colors">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-slate-100">
                <div className="absolute inset-0 bg-slate-50" />
                {/* Grayscale founder photo matches the premium Apple/Linear feel */}
                <div className="absolute inset-0 bg-[url('/founder.png')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-1">Ansh Kumar</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">Founder, CallArk (Age 19)</p>
                <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5 mb-6">
                  <MapPin className="w-3.5 h-3.5" /> Kanpur, India
                </p>
                
                <div className="flex justify-center gap-3 mb-6">
                  <a href="https://x.com/a2maxadi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ansh-kumar-b07630319/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/adityax269" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>

                <a 
                  href="mailto:ansh@CallArk.ai?subject=CallArk%20Investor%20Inquiry"
                  className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white h-12 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Founder
                </a>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl p-6 border border-blue-100/30">
              <div className="flex items-center gap-2.5 mb-4 text-blue-700">
                <BookOpen className="w-5 h-5" />
                <h4 className="font-bold font-outfit text-sm uppercase tracking-wider">Our Mission</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To build local, highly context-aware voice AI receptionists that empower Indian SMBs to serve customers 24/7 without the overhead of massive call centers.
              </p>
            </div>

            {/* VISION CARD */}
            <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl p-6 border border-blue-100/30">
              <div className="flex items-center gap-2.5 mb-4 text-blue-700">
                <Eye className="w-5 h-5" />
                <h4 className="font-bold font-outfit text-sm uppercase tracking-wider">Our Vision</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                A world where conversational AI bridges the gap between technology and the non-tech-savvy user, making customer service instant, natural, and friendly.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT: PHILOSOPHY, INVESTMENT OPPORTUNITY, ROADMAP */}
          <div className="md:col-span-8 space-y-16">
            
            {/* STARTUP PHILOSOPHY */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Startup Philosophy
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Missed Calls cost Customers</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      SMBs lose up to 40% of leads simply because there is no one available to answer calls during peak hours or after business hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Voice AI should be Simple & Accessible</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      We remove complex IVR dial pads and integrations. Businesses only need to forward calls; CallArk does the rest naturally.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Tailored Specially for India</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Indian consumers switch seamlessly between Hindi, English, and Hinglish. We build models optimized specifically for this multilingual context and dial-tone latency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* INVESTOR INFORMATION */}
            <section id="investors" className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Investment Thesis & Market
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Market Opportunity</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Over 60 million MSMEs in India are digitizing rapidly. Standard automated voice tools fail because they lack the intelligence and language variations needed for the local populace.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Why Voice AI & Why Now?</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    TTS and STT latencies have reached sub-500ms thresholds, combined with the extreme drop in LLM execution costs. Conversational AI over voice is now commercially viable for small businesses.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Why India?</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    India represents the largest unified market of mobile users with high reliance on voice over text. Integrating Whatsapp and telecom routing solves the absolute core communication loop.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Current Stage & Vision</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Currently bootstrapping the core platform. Actively engaging in pilot programs with key clinics, academies and realtors across Kanpur to prepare for scaling capital.
                  </p>
                </div>
              </div>
            </section>

            {/* FUTURE ROADMAP */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Future Roadmap
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 shrink-0 relative after:absolute after:top-3 after:bottom-[-24px] after:left-1.5 after:w-px after:-translate-x-1/2 after:bg-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 m-0">Phase 1 — Private Beta & Early Validation (2026)</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Launch CallArk with selected clinics, coaching centers, salons, and local businesses across India. Focus on improving real-world call handling, bilingual Hindi-English conversations, voice quality, latency optimization, and appointment workflows. Complete first 20+ pilot partnerships and gather operational feedback.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 shrink-0 relative after:absolute after:top-3 after:bottom-[-24px] after:left-1.5 after:w-px after:-translate-x-1/2 after:bg-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 m-0">Phase 2 — Public Launch & Business Expansion (Late 2026)</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Publicly launch CallArk for Indian service businesses. Expand onboarding, analytics, lead management, and business automation features. Improve AI reliability, scalability, and multilingual conversation accuracy. Begin onboarding agencies and multi-location businesses while scaling customer support infrastructure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-slate-200 mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 m-0">Phase 3 — Advanced Voice Intelligence & Vernacular AI (2027)</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Expand support for regional Indian languages including Kannada, Tamil, Telugu, Marathi, Bengali, and Punjabi. Develop deeper business customization, industry-specific AI workflows, and localized conversational intelligence. Begin research and development for fine-tuned India-focused voice AI models optimized for natural multilingual customer interactions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* INVESTOR CONTACT CTA */}
            {/* INVESTOR CONTACT CTA */}
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
