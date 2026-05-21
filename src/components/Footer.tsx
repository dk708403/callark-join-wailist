import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold font-outfit text-lg leading-none">C</span>
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight text-stone-900">
                CallArk
              </span>
            </Link>
            <p className="text-stone-500 text-sm mt-4">
              Building AI Voice Infrastructure for Indian Businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-outfit font-semibold text-stone-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-stone-500 hover:text-blue-600 text-sm transition-colors">Founder & Investors</Link></li>
              <li><Link href="/#waitlist" className="text-stone-500 hover:text-blue-600 text-sm transition-colors">Waitlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-semibold text-stone-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-stone-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-stone-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-semibold text-stone-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-stone-500 text-sm">callarkteam@gmail.com</li>
              <li className="text-stone-500 text-sm">Kanpur, India</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} CallArk. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://x.com/a2maxadi" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/ansh-kumar-b07630319/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/adityax269" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
