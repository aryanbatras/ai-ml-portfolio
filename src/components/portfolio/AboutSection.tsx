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
          <h2 className="text-3xl font-bold mb-8">A Research-First Approach</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              My journey in Machine Learning began with a simple curiosity about how patterns emerge from raw data. Today, that curiosity has evolved into a structured methodology focused on <span className="text-foreground font-medium">interpretability and efficiency</span>.
            </p>
            <p>
              Whether it's developing tissue aberration detection models at <span className="text-foreground font-medium">IIT Jammu</span> or optimizing algorithms during my time at <span className="text-foreground font-medium">DRDO</span>, I believe that the best AI solutions are those that solve real-world problems while maintaining scientific rigor.
            </p>
            <p>
              I bridge the gap between academic research and practical implementation, transforming complex papers into performant codebases using PyTorch, TensorFlow, and modern MLOps tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}