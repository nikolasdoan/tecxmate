"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/spotlight"
import { AnimatedDiagonalBackground } from "@/components/animated-diagonal-background"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F6F3F1] pt-12 md:pt-16 pb-6 snap-end">
      {/* Spotlight effect */}
      <Spotlight className="opacity-100" size={800} />

      {/* Animated diagonal background */}
      <AnimatedDiagonalBackground 
        className="z-0 opacity-30" 
        lineCount={200}
        color="rgba(133, 82, 255, 0.08)"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(133, 82, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="font-semibold text-2xl md:text-3xl tracking-tight text-black">
                <span className="font-light">tecx</span>
                <span className="font-bold">mate</span>
              </span>
            </Link>
            <p className="text-lg text-gray-500">
              Got an idea? Let us be your tecxmate!
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tighter">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#services" className="hover:text-primary">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary">
                  Market Research & Consultancy
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tighter">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#team" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tighter">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="mailto:tecxmate@gmail.com" className="hover:text-primary">
                  Email: tecxmate@gmail.com
                </a>
              </li>
              <li>
                <span>WhatsApp | Line | WeChat: nikolasdoan</span>
              </li>
              <li>
                <a
                  href="https://cal.com/nikolasdoan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Book a Discovery Call
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 md:mt-10 border-t border-gray-200 pt-4 text-center text-lg text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Tecxmate. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
