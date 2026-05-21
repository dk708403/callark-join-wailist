"use client";

import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-4xl font-bold font-outfit text-slate-900 tracking-tight">Terms of Service</h1>
            <p className="text-sm text-slate-400 font-medium mt-1">Last Updated: May 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed font-normal">
          <p>
            Welcome to CallArk.
          </p>
          <p>
            These Terms of Service (“Terms”) govern your access to and use of CallArk products, services, website, and AI voice systems.
          </p>
          <p className="font-medium text-slate-900">
            By accessing or using CallArk, you agree to these Terms.
          </p>

          {/* Section 1 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">1. Services</h2>
            <p>
              CallArk provides AI-powered voice automation tools for businesses, including call handling, appointment assistance, lead capture, and related communication services.
            </p>
            <p>
              Services may evolve, change, or improve over time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">2. Eligibility</h2>
            <p>
              You must be legally capable of entering into agreements to use CallArk services.
            </p>
            <p>
              Businesses using CallArk are responsible for ensuring lawful usage within their jurisdiction.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">3. User Responsibilities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Use CallArk for unlawful activities</li>
              <li>Abuse or exploit the platform</li>
              <li>Attempt unauthorized access</li>
              <li>Misrepresent identity or business information</li>
              <li>Use services for spam, fraud, harassment, or harmful activities</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">4. AI Limitations</h2>
            <p>CallArk uses artificial intelligence systems which may occasionally:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>generate inaccurate responses</li>
              <li>misunderstand speech</li>
              <li>produce unexpected outputs</li>
            </ul>
            <p className="text-sm">
              Users are responsible for reviewing and validating important business interactions where necessary.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">5. Service Availability</h2>
            <p>
              We aim to provide reliable service but do not guarantee uninterrupted availability, error-free operation, or continuous uptime.
            </p>
            <p>
              Services may be modified, suspended, or updated at any time.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">6. Intellectual Property</h2>
            <p>
              All branding, software, designs, technology, and content related to CallArk remain the intellectual property of CallArk unless otherwise stated.
            </p>
            <p>
              Users may not copy, reverse engineer, distribute, or resell platform components without permission.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">7. Payments & Billing</h2>
            <p>
              Certain features may require paid subscriptions or usage-based billing.
            </p>
            <p>
              Pricing, plans, and payment terms may change over time.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, CallArk shall not be liable for:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>indirect damages</li>
              <li>business losses</li>
              <li>missed opportunities</li>
              <li>data loss</li>
              <li>service interruptions</li>
              <li>AI-generated inaccuracies</li>
            </ul>
            <p className="text-sm font-medium">
              Use of the platform is at your own risk.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to services if users violate these Terms or misuse the platform.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">10. Future Updates</h2>
            <p>
              These Terms may be updated periodically. Continued use of CallArk after updates constitutes acceptance of revised Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold font-outfit text-slate-900">11. Contact</h2>
            <p>For legal or service-related inquiries:</p>
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
