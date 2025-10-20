'use client'

import { motion } from 'framer-motion'
import { Download, Envelope, LinkedinLogo, GithubLogo, MapPin } from '@phosphor-icons/react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300/15 to-blue-300/15 dark:from-cyan-400/20 dark:to-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm relative group">
              <img 
                src="/Niraj_Photo.jpg" 
                alt="Niraj Thapa" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-4 drop-shadow-2xl">
              Niraj Thapa
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-200 mb-4 font-semibold tracking-wide">
              IT Student & Cybersecurity Professional
            </h2>
            <div className="flex items-center justify-center text-gray-700 dark:text-blue-100 mb-8">
              <MapPin className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-300" />
              <span className="font-medium">Toronto, Canada | Available for opportunities</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 dark:text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Passionate and self-driven IT student specializing in cloud systems, DevOps, and cybersecurity. 
            Experienced in deploying secure infrastructures using Docker, Kubernetes, Azure, AWS, and Nextcloud, 
            along with configuring VPNs, SIEM, and network systems. Known for strong problem-solving skills, 
            attention to detail, and the ability to bridge customer needs with reliable technical solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white dark:hover:bg-white/20 transition-all duration-300 flex items-center btn-modern border border-gray-200 dark:border-white/30 hover:border-gray-300 dark:hover:border-white/50 shadow-lg hover:shadow-xl"
            >
              <Envelope className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <a
              href="/Niraj_Thapa_Resume.pdf"
              download="Niraj_Thapa_Resume.pdf"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center btn-modern transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-12"
          >
            <a
              href="https://www.linkedin.com/in/ciphercore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <LinkedinLogo className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Niraj47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <GithubLogo className="w-8 h-8" />
            </a>
            <a
              href="mailto:nirajthapa@niraj.info"
              className="text-gray-600 dark:text-white/70 hover:text-red-500 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <Envelope className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
