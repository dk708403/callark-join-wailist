"use client";

import { motion } from "framer-motion";
import { Link, PhoneIncoming, UserCheck, Smartphone } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Connect Your Number",
      description: "Forward your existing business number to CallArk or get a new virtual number in seconds.",
      icon: Link,
    },
    {
      title: "AI Answers Calls",
      description: "CallArk picks up instantly, speaking naturally with your customers based on your business rules.",
      icon: PhoneIncoming,
    },
    {
      title: "Capture & Action",
      description: "Appointments are booked, leads are qualified, and queries are answered automatically.",
      icon: UserCheck,
    },
    {
      title: "Instant Updates",
      description: "Receive immediate summaries via Email or your dashboard after every successful call.",
      icon: Smartphone,
    }
  ];

  return (
    <section className="py-28 bg-white overflow-hidden relative border-t border-slate-100/60">
      {/* Subtle blue glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/20 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-slate-900 tracking-tight">
            How CallArk Works
          </h2>
          <p className="text-slate-500 text-lg font-normal">
            Set up once. Automate forever.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-50 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center mb-6 relative z-10 shadow-[0_8px_30px_rgb(37,99,235,0.04)]">
                  <step.icon className="w-7 h-7 text-blue-600" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold font-outfit text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
