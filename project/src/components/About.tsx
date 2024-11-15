import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-30" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Shaping Tomorrow's World
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Earth One is more than an initiative—it's a movement towards unified global progress. 
            We believe in harnessing the power of connection to drive sustainable innovation and 
            create lasting positive impact across continents.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                A world where boundaries dissolve and innovation flows freely, 
                connecting minds and resources across the globe.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To create a seamless network of global changemakers, empowering 
                communities to tackle humanity's greatest challenges together.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}