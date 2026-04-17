import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Shield, Code, GraduationCap } from 'lucide-react';
const EXPERIENCES = [
  {
    title: "AI/ML Research Intern",
    organization: "IIT Jammu",
    period: "Feb 2024 - Present",
    description: "Developing advanced ML models for tissue aberration detection using high-resolution imaging data. Implementing state-of-the-art architectures in PyTorch.",
    icon: <Microscope className="h-5 w-5" />,
  },
  {
    title: "Summer Intern",
    organization: "DRDO (SAG)",
    period: "Jun 2023 - Jul 2023",
    description: "Assisted in research involving signal processing and deep learning applications for national defense systems. Optimized model inference times by 30%.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Full Stack Development Intern",
    organization: "Skill Dunia",
    period: "Mar 2023 - May 2023",
    description: "Built scalable web applications and integrated AI-driven features for educational platforms using React and Node.js.",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Computer Science Engineering",
    organization: "Lovely Professional University",
    period: "2021 - 2025",
    description: "Focusing on Artificial Intelligence and Data Science. Maintaining high academic standing with multiple project distinctions.",
    icon: <GraduationCap className="h-5 w-5" />,
  }
];
export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
        <p className="text-muted-foreground mt-2">Where I've contributed and learned.</p>
      </div>
      <div className="relative border-l-2 border-orange-500/20 ml-4 md:ml-8 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-background border-2 border-orange-500 flex items-center justify-center transition-colors group-hover:bg-orange-500">
              <div className="h-2 w-2 rounded-full bg-orange-500 group-hover:bg-white transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-orange-600 font-medium text-sm mb-1">
                {exp.icon}
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-muted-foreground font-medium mb-3">{exp.organization}</p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}