"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-36">
      {/* Background gradients (Futuristic blue glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/70 via-white to-white" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[130px] opacity-70" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[130px] opacity-60" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 text-blue-700 text-sm font-medium mb-8 border border-blue-100/60"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Built for Indian businesses
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-outfit text-slate-900 tracking-tight leading-[1.08] mb-6"
          >
            Never Miss a <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Customer Call Again.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            AI voice receptionist for clinics, coaching centers, salons, and local businesses.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
          >
            <Link 
              href="/#waitlist" 
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full sm:w-auto rounded-full px-8 h-14 text-base bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center font-medium"
              )}
            >
              Join Waitlist
            </Link>
            <Link 
              href="/#demo" 
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto rounded-full px-8 h-14 text-base border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300 group flex items-center justify-center gap-2"
              )}
            >
              <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              Listen Demo
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup Visual with Blue Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-16 md:mt-24 relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          <div className="relative rounded-2xl md:rounded-[2rem] border border-blue-100/50 bg-white/40 backdrop-blur-md shadow-[0_24px_50px_-12px_rgba(37,99,235,0.08)] p-2 md:p-5 overflow-hidden">
            <div className="min-h-[300px] md:aspect-[16/9] bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100 overflow-hidden relative flex items-center justify-center p-4">
              {/* Premium Dashboard Image mockup with blue gradient */}
              <div className="absolute inset-0 bg-[url('/hero-mockup-blue.png')] bg-cover bg-center opacity-70 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent mix-blend-overlay" />
              
              <div className="relative z-10 text-center bg-white/80 backdrop-blur-md py-6 sm:py-8 px-6 sm:px-12 rounded-2xl md:rounded-3xl border border-blue-50/50 shadow-xl max-w-sm w-full mx-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 sm:mb-5 relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-15" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <div className="w-4 sm:w-5 h-1 sm:h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 mb-1">Live Call Connected</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mb-3 sm:mb-4">CallArk Receptionist</p>
                
                <div className="flex items-center justify-center gap-1 h-6 sm:h-8">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ["15%", "100%", "15%"] }}
                      transition={{ 
                        duration: 0.9, 
                        repeat: Infinity, 
                        delay: i * 0.08,
                        ease: "easeInOut" 
                      }}
                      className="w-1 bg-blue-500 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating UI Cards */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 hidden md:flex items-center gap-3.5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Appointment Booked</p>
                <p className="text-[10px] text-slate-400 font-medium">Tomorrow, 11:30 AM</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-1/4 hidden md:flex items-center gap-3.5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 z-20"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Lead Qualified</p>
                <p className="text-[10px] text-slate-400 font-medium">Coaching center inquiry</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
