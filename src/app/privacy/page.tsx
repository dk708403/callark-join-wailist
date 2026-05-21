"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32 text-slate-800 relative overflow-hidden">
      {/* Decorative premium blue gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6 max-w-3xl">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-10 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100/60 shadow-[0_8px_30px_rgb(37,99,235,0.04)] shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-4xl font-bold font-outfit text-slate-900 tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-slate-400 font-medium mt-1">Last Updated: May 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed font-normal">
          <p>
            Welcome to CallArk.
          </p>
          <p>
            CallArk (“we”, “our”, or “us”) provides AI-powered voice automation services for businesses. This Privacy Policy explains how we collect, use, and protect your information when you use our website, products, and services.
          </p>
          <p className="font-medium text-slate-900">
            By using CallArk, you agree to the practices described in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-blue-500/30">
              <div>
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Personal Information</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Contact details submitted through forms or waitlists</li>
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Usage Information</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>Device type</li>
                  <li>Browser type</li>
                  <li>IP address</li>
                  <li>Website interaction data</li>
                  <li>Session analytics</li>
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Call & AI Interaction Data</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>Voice recordings</li>
                  <li>Call transcripts</li>
                  <li>AI-generated responses</li>
                  <li>Appointment or lead information collected during calls</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">2. How We Use Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Provide and improve CallArk services</li>
              <li>Process waitlist and demo requests</li>
              <li>Respond to inquiries</li>
              <li>Improve AI performance and accuracy</li>
              <li>Analyze usage trends</li>
              <li>Maintain platform security and reliability</li>
              <li>Communicate product updates and announcements</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">3. Data Protection</h2>
            <p>
              CallArk uses industry-standard security practices and infrastructure providers to help protect user information and business data from unauthorized access, misuse, or disclosure.
            </p>
            <p>
              We continuously work to improve platform security, reliability, and data protection measures as the product evolves.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">4. Third-Party Services</h2>
            <p>CallArk may use trusted third-party services including:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Cloud hosting providers</li>
              <li>Analytics providers</li>
              <li>Payment processors</li>
              <li>Communication platforms</li>
              <li>AI model providers</li>
            </ul>
            <p className="text-sm">
              These providers may process data only as necessary to support our services.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">5. Cookies</h2>
            <p>
              We may use cookies and similar technologies to improve user experience, analyze traffic, and optimize platform performance.
            </p>
            <p className="text-sm">
              You may disable cookies through your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">6. Data Retention</h2>
            <p>
              We retain information only as long as necessary for operational, legal, or security purposes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">7. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of data</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-sm">
              Requests can be submitted through our contact email.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">8. Future Changes</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of CallArk after updates means you accept the revised policy.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">9. Contact</h2>
            <p>For privacy-related questions:</p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2 text-sm">
              <p><strong>Email:</strong> contact@CallArk.ai</p>
              <p><strong>Company:</strong> CallArk</p>
              <p><strong>Location:</strong> India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
