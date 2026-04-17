import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, ChevronDown, User } from 'lucide-react';
export function HeroSection() {
  // Banner background image (Silhouette tree/phone quote theme)
  const bannerUrl = "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop";
  // Profile photo (Man in black suit)
  const profilePhotoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center overflow-hidden">
      {/* Banner Area */}
      <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.2] brightness-[0.7]"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 md:-mt-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Avatar className="h-40 w-40 md:h-48 md:w-48 border-4 border-background shadow-2xl ring-4 ring-orange-500/20">
              <AvatarImage src={profilePhotoUrl} alt="Ashutosh Bhat" className="object-cover" />
              <AvatarFallback className="bg-orange-100 text-orange-600">
                <User className="h-20 w-20" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 mb-2 text-sm font-medium tracking-wider text-orange-600 uppercase bg-orange-50 dark:bg-orange-950/30 rounded-full border border-orange-100 dark:border-orange-900/50">
              Aspiring Computer Science Engineer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground">
              Ashutosh <span className="text-orange-500">Bhat</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building intelligent systems that understand the world. Specialized in Machine Learning, Data Science, and Generative AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="h-12 px-8 text-base bg-orange-500 hover:bg-orange-600 text-white rounded-full group shadow-lg shadow-orange-500/20" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-orange-200 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-orange-500"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}