'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaUtensils, FaHistory, FaAward } from 'react-icons/fa';

export default function AboutUsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  
  return (
    <section 
      ref={ref} 
      className="bg-primary py-16 px-4 md:px-8 lg:px-16 rtl text-right overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-secondary font-display leading-tight"
            >
              המסע של tomi
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-8 leading-relaxed"
            >
              אנחנו מסעדה מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <FaUtensils className="text-secondary text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">חדשנות קולינרית</h3>
                <p>שילוב של טכנולוגיה וטעמים מסורתיים</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <FaHistory className="text-secondary text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">מסורת ארוכה</h3>
                <p>ניסיון של שנים רבות בתחום המסעדנות</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                <FaAward className="text-secondary text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">שירות מצטיין</h3>
                <p>מחויבות לאיכות ולחוויית לקוח יוצאת דופן</p>
              </motion.div>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-secondary text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              קרא עוד עלינו
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={imageVariants}
            className="order-1 md:order-2 relative"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20"></div>
              <img 
                src="/images/restaurant-interior.jpg" 
                alt="tomi restaurant interior" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-xl"
            >
              <p className="font-bold text-primary text-xl">15+</p>
              <p className="text-gray-700">שנות ניסיון</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}