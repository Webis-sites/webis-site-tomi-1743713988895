'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaCalendarAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const foodItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for food items
    if (foodItemsRef.current) {
      const foodItems = foodItemsRef.current.querySelectorAll('.food-item');
      
      gsap.fromTo(
        foodItems,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8,
          rotation: -5
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: foodItemsRef.current,
            start: 'top bottom',
            end: 'bottom center',
            scrub: 1,
          }
        }
      );
    }

    // Parallax effect for background
    if (heroRef.current) {
      gsap.to('.hero-bg-pattern', {
        backgroundPositionY: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Food items to animate
  const foodItems = [
    { name: 'פלאפל', image: '/images/falafel.png', delay: 0.1 },
    { name: 'חומוס', image: '/images/hummus.png', delay: 0.3 },
    { name: 'שקשוקה', image: '/images/shakshuka.png', delay: 0.5 },
    { name: 'סלט', image: '/images/salad.png', delay: 0.7 },
  ];

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary text-right rtl"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="hero-bg-pattern absolute inset-0 opacity-10 z-0" />
      
      {/* Tech-inspired circuit lines */}
      <div className="absolute inset-0 z-0">
        <div className="circuit-lines" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block mb-4 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <FaUtensils className="inline-block ml-2" />
            <span className="font-bold">מסעדת טומי</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            מסעדה <span className="text-secondary">מוביל</span> בישראל
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-700 font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.button 
            className="cta-button bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(150, 206, 180, 0.5)" 
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <FaCalendarAlt className="inline-block ml-2" />
            קבע תור עכשיו
          </motion.button>
        </motion.div>
        
        {/* Animated Food Items */}
        <div 
          ref={foodItemsRef}
          className="lg:w-1/2 relative h-[400px] md:h-[500px]"
        >
          <div className="food-items-container relative w-full h-full">
            {foodItems.map((item, index) => (
              <motion.div
                key={index}
                className="food-item absolute"
                style={{
                  top: `${20 + (index * 15)}%`,
                  right: `${10 + (index * 10)}%`,
                  zIndex: 10 - index
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: item.delay,
                  duration: 0.8,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: item.delay
                  }
                }}
              >
                <div className="bg-white p-3 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay" />
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center font-medium">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Tech-inspired floating elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-secondary/30 backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/40 backdrop-blur-sm"
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
      
      {/* Decorative tech-food elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-secondary/20 to-transparent" />
      <div className="absolute top-10 right-10 hidden md:block">
        <motion.div 
          className="w-20 h-20 rounded-full border-4 border-dashed border-secondary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;