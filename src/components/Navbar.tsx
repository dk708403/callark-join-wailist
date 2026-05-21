"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Features", href: "/#features" },
    { name: "Demo", href: "/#demo" },
    { name: "Use Cases", href: "/#use-cases" },
    { name: "Waitlist", href: "/#waitlist" },
    { name: "Founder & Investors", href: "/company" },
  ];

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold font-outfit text-lg leading-none">C</span>
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight text-slate-900">
              CallArk
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/#waitlist"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/10 hover:shadow-lg transition-all duration-300 font-semibold"
              )}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Small Quick-CTA Button on Mobile Nav */}
            <Link
              href="/#waitlist"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full px-4 text-xs bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md font-semibold h-9"
              )}
            >
              Join
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-md"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 bottom-0 w-[290px] sm:w-[350px] bg-white z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-slate-100"
            >
              <div>
                {/* Header inside menu */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold font-outfit text-lg leading-none">C</span>
                    </div>
                    <span className="font-outfit font-bold text-lg text-slate-900">
                      CallArk
                    </span>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-5">
                  {links.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-slate-600 hover:text-blue-600 transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Waitlist Button at Bottom */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-slate-100">
                <Link
                  href="/#waitlist"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/10"
                  )}
                >
                  Join Waitlist
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
