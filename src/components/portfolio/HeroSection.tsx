import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, ChevronDown, User } from 'lucide-react';
export function HeroSection() {
  // Official LinkedIn Banner
  const bannerUrl = "https://media.licdn.com/dms/image/v2/D5616AQEdTgte7bUpoQ/profile-displaybackgroundimage-shrink_350_1400/B56Z0FyTqdKsAY-/0/1773918572948?e=1778112000&v=beta&t=HxrVNHGAzA5rvr_HCSVJWRhRFUu8zidiSm6zpiAhPIk";
  // Official LinkedIn Profile Photo
  const profilePhotoUrl = "https://media.licdn.com/dms/image/v2/D5603AQEMCg8L8FdVhQ/profile-displayphoto-crop_800_800/B56ZxvkPF7HsAQ-/0/1771398298244?e=1778112000&v=beta&t=SZ9t5I-BS-Bp5PsKuubv80nfBYZzHWoaIM6JeSvveLc";
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center overflow-hidden bg-background">
      {/* Cinematic Banner Area */}
      <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        />
        {/* Progressive Gradient Overlays for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-24 md:-mt-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo with Professional Styling */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, cubicBezier: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <Avatar className="h-44 w-44 md:h-56 md:w-56 border-[6px] border-background shadow-2xl ring-4 ring-orange-500/10 overflow-hidden">
              <AvatarImage src={profilePhotoUrl} alt="Ashutosh Bhat" className="object-cover transition-transform duration-500 hover:scale-110" />
              <AvatarFallback className="bg-orange-100 text-orange-600">
                <User className="h-24 w-24" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 mb-2 text-xs md:text-sm font-semibold tracking-widest text-orange-600 uppercase bg-orange-50 dark:bg-orange-950/30 rounded-full border border-orange-100 dark:border-orange-900/50 shadow-sm">
              Aspiring Computer Science Engineer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground">
              Ashutosh <span className="text-orange-500">Bhat</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Building intelligent systems that understand the world. Specialized in Machine Learning, Data Science, and Generative AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
              <Button size="lg" className="h-14 px-10 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-full group shadow-xl shadow-orange-500/25 transition-all hover:scale-105 active:scale-95" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold rounded-full border-2 border-orange-200 dark:border-orange-900/50 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all hover:scale-105" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground/60 hover:text-orange-500 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="h-10 w-10 stroke-[1.5]" />
      </motion.div>
    </section>
  );
}