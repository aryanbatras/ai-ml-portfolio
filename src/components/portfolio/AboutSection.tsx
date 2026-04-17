import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Personal Narrative</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I’m an inquisitive and driven <span className="text-foreground font-semibold">AI and Machine Learning Engineer</span> in the making, currently pursuing a B.Tech in Computer Science Engineering at <span className="text-foreground font-semibold">MBSCET</span>.
            </p>
            <p>
              My curiosity for how intelligence emerges from data fuels my passion for exploring the depths of <span className="text-foreground font-medium">machine learning, data science, and generative AI</span>. I thrive on the challenge of transforming raw information into actionable insights and intelligent systems.
            </p>
            <p>
              Whether it’s architecting neural networks or performing complex exploratory data analysis, my goal is to build technology that is both scientifically rigorous and practically impactful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}