"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  PhoneMissed, 
  CalendarDays, 
  Languages, 
  UserPlus, 
  MessageCircle, 
  GitMerge, 
  BellRing
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      title: "24/7 AI Receptionist",
      description: "Never sleep on an opportunity. Your AI answers calls round the clock.",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-50/80"
    },
    {
      title: "Missed Call Recovery",
      description: "Automatically call back or message missed callers within seconds.",
      icon: PhoneMissed,
      color: "text-indigo-600",
      bg: "bg-indigo-50/80"
    },
    {
      title: "Appointment Booking",
      description: "Seamlessly integrate with your calendar to book slots dynamically.",
      icon: CalendarDays,
      color: "text-blue-500",
      bg: "bg-blue-50/50"
    },
    {
      title: "Hindi + English Conversations",
      description: "Fluent in Hinglish and local dialects to serve Indian customers naturally.",
      icon: Languages,
      color: "text-indigo-500",
      bg: "bg-indigo-50/50"
    },
    {
      title: "Lead Capture",
      description: "Extract name, context, and contact details from every conversation.",
      icon: UserPlus,
      color: "text-blue-600",
      bg: "bg-blue-50/80"
    },
    {
      title: "WhatsApp Follow-up",
      description: "Send automated WhatsApp summaries and booking confirmations post-call.",
      icon: MessageCircle,
      color: "text-indigo-600",
      bg: "bg-indigo-50/80"
    },
    {
      title: "Smart Call Routing",
      description: "Transfer complex queries to human staff when necessary.",
      icon: GitMerge,
      color: "text-blue-500",
      bg: "bg-blue-50/50"
    },
    {
      title: "Real-time Notifications",
      description: "Get instant alerts for important calls on your phone or desktop.",
      icon: BellRing,
      color: "text-indigo-500",
      bg: "bg-indigo-50/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };

  return (
    <section id="features" className="py-28 bg-white relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">
            Everything your business needs to scale.
          </h2>
          <p className="text-slate-500 text-lg font-normal">
            CallArk replaces outdated IVR systems with intelligent, human-like voice agents that actually help your customers.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-slate-100 bg-white/70 backdrop-blur-sm hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.06)] hover:border-blue-100/60 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
