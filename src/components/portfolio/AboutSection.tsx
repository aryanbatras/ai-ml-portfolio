import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-12 tracking-tight"
          >
            Personal <span className="text-orange-500">Narrative</span>
          </motion.h2>
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            <motion.p variants={itemVariants}>
              I’m an inquisitive and driven <span className="text-foreground font-bold border-b-2 border-orange-500/20">AI and Machine Learning Engineer</span> in the making, currently pursuing a B.Tech in Computer Science Engineering at <span className="text-foreground font-bold">MBSCET</span>.
            </motion.p>
            <motion.p variants={itemVariants}>
              My curiosity for how intelligence emerges from data fuels my passion for exploring the depths of <span className="text-foreground font-semibold">machine learning, data science, and generative AI</span>. I thrive on the challenge of transforming raw information into actionable insights and robust, intelligent systems.
            </motion.p>
            <motion.p variants={itemVariants}>
              Whether it’s architecting complex neural networks or performing deep exploratory data analysis, my mission is to build technology that is both <span className="text-orange-500 italic">scientifically rigorous</span> and practically impactful in the real world.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}