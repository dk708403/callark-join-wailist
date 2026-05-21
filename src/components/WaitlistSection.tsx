"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Sparkles, Loader2 } from "lucide-react";

export default function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        throw new Error('Failed to submit form');
      }
      
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="waitlist" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/10 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          {/* Subtle bg glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, delay: 0.1 }}
                    className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-blue-600" />
                  </motion.div>
                  <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">You're on the list!</h3>
                  <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
                    Thank you for joining the CallArk waitlist. We will reach out to you soon with early access details.
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4 flex items-center justify-center gap-3 tracking-tight">
                      Get early access to CallArk <Sparkles className="w-7 h-7 text-blue-500" />
                    </h2>
                    <p className="text-slate-500 text-lg">
                      Join hundreds of Indian businesses waiting to automate their customer calls.
                    </p>
                    <div className="inline-flex items-center gap-2 mt-4 bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Limited early access slots
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-slate-700 text-xs font-semibold">Full Name</Label>
                      <Input 
                        id="fullName" 
                        name="fullName"
                        required 
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="Rahul Sharma" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-slate-700 text-xs font-semibold">Business Name</Label>
                      <Input 
                        id="businessName" 
                        name="businessName"
                        required 
                        value={formData.businessName}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="Sharma Dental Clinic" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 text-xs font-semibold">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="rahul@example.com" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 text-xs font-semibold">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="businessType" className="text-slate-700 text-xs font-semibold">Business Type</Label>
                      <select 
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={(e: any) => handleChange(e)}
                        className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2 text-sm h-12 text-slate-500 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="" disabled>Select your industry</option>
                        <option value="clinic">Clinic / Healthcare</option>
                        <option value="coaching">Coaching / Education</option>
                        <option value="salon">Salon / Spa</option>
                        <option value="real_estate">Real Estate</option>
                        <option value="agency">Agency / B2B</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <Button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300"
                      >
                        {status === "loading" ? (
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        ) : null}
                        {status === "loading" ? "Joining..." : "Get Early Access"}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
