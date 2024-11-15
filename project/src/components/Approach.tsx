import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Users, Megaphone } from 'lucide-react';

const pillars = [
  {
    icon: Star,
    title: "Resourcing Rising Stars",
    description: "Identifying and supporting emerging talent and innovative solutions across the globe."
  },
  {
    icon: Users,
    title: "Connecting the Connectors",
    description: "Building bridges between changemakers to amplify their collective impact."
  },
  {
    icon: Megaphone,
    title: "Amplifying Projects",
    description: "Providing platforms and resources to scale successful initiatives worldwide."
  }
];

export default function Approach() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="approach" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">
          Our Approach
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 }}
                className="text-blue-400 mb-6"
              >
                <pillar.icon size={40} />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>
              
              <p className="text-gray-300">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}