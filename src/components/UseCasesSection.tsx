"use client";

import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, Scissors, Home, Utensils, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Clinics & Hospitals",
      icon: Stethoscope,
      description: "Patient appointment booking, rescheduling, and general inquiries.",
      color: "text-blue-600",
      bg: "bg-blue-50/80"
    },
    {
      title: "Coaching Centers",
      icon: GraduationCap,
      description: "Course inquiries, batch timings, and lead qualification.",
      color: "text-indigo-600",
      bg: "bg-indigo-50/80"
    },
    {
      title: "Salons & Spas",
      icon: Scissors,
      description: "Service bookings, pricing queries, and availability checks.",
      color: "text-blue-500",
      bg: "bg-blue-50/40"
    },
    {
      title: "Real Estate",
      icon: Home,
      description: "Property inquiries, site visit scheduling, and buyer qualification.",
      color: "text-indigo-500",
      bg: "bg-indigo-50/40"
    },
    {
      title: "Restaurants",
      icon: Utensils,
      description: "Table reservations, menu inquiries, and order taking.",
      color: "text-blue-600",
      bg: "bg-blue-50/80"
    },
    {
      title: "Agencies & B2B",
      icon: Briefcase,
      description: "Client support, initial consultation booking, and FAQs.",
      color: "text-indigo-600",
      bg: "bg-indigo-50/80"
    }
  ];

  return (
    <section id="use-cases" className="py-28 bg-white relative border-t border-slate-100/60">
      {/* Subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/20 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">
            Built for Every Business
          </h2>
          <p className="text-slate-500 text-lg font-normal">
            CallArk adapts its conversational style and knowledge base to perfectly match your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="border-slate-100 bg-white/70 backdrop-blur-sm hover:border-blue-100 hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.05)] transition-all duration-300 group cursor-default">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold font-outfit text-slate-900 mb-1 text-lg leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
