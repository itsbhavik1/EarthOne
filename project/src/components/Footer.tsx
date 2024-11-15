import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Github, href: '#', label: 'GitHub' }
];

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Earth One</h3>
            <p className="text-gray-400">Uniting humanity through innovation</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Earth One Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}