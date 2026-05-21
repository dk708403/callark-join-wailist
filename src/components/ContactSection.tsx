"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    interestType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, delay: 0.1 }}
                    className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">Message Sent</h3>
                  <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
                    Your message has been sent successfully. We'll get back to you shortly.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">
                      Talk to the Founder
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                      Interested in CALLARK, partnerships, pilots, or early access? Reach out directly.
                    </p>
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
                      <Label htmlFor="email" className="text-slate-700 text-xs font-semibold">Work Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="rahul@company.com" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-700 text-xs font-semibold">Company / Organization</Label>
                      <Input 
                        id="company" 
                        name="company"
                        required 
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-slate-50 border-slate-100 h-12 rounded-xl focus-visible:ring-blue-500" 
                        placeholder="Acme Corp" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interestType" className="text-slate-700 text-xs font-semibold">Interest Type (Optional)</Label>
                      <select 
                        id="interestType"
                        name="interestType"
                        value={formData.interestType}
                        onChange={(e: any) => handleChange(e)}
                        className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2 text-sm h-12 text-slate-500 ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="Investor">Investor</option>
                        <option value="Pilot Customer">Pilot Customer</option>
                        <option value="Partnership">Partnership</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="message" className="text-slate-700 text-xs font-semibold">Message</Label>
                      <textarea 
                        id="message" 
                        name="message"
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[120px] resize-none" 
                        placeholder="How can we help you?" 
                      />
                    </div>

                    {status === "error" && (
                      <div className="md:col-span-2 text-red-500 text-sm font-medium text-center bg-red-50 py-2 rounded-lg">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="md:col-span-2 pt-4">
                      <Button 
                        type="submit" 
                        disabled={status === "loading" || status === "success"}
                        className="w-full h-14 text-base font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-200 transition-all duration-300"
                      >
                        {status === "loading" ? (
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        ) : <Send className="w-4 h-4 mr-2" />}
                        {status === "loading" ? "Sending..." : "Send Message"}
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
