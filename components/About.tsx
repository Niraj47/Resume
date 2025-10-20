'use client'

import { motion } from 'framer-motion'
import { Code, Users, Target, Trophy } from '@phosphor-icons/react'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in modern web technologies including React, Node.js, and cloud platforms.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication skills and experience working in agile development teams.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Passionate about finding innovative solutions to complex technical challenges.',
    },
    {
      icon: Trophy,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with the latest technologies and best practices.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Passionate and self-driven IT student specializing in cloud systems, DevOps, and cybersecurity. 
      Experienced in deploying secure infrastructures using Docker, Kubernetes, Azure, AWS, and Nextcloud, 
      along with configuring VPNs, SIEM, and network systems. Known for strong problem-solving skills, 
      attention to detail, and the ability to bridge customer needs with reliable technical solutions.
    </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
    <p>
      I specialize in cloud platforms (Microsoft Azure, AWS, Google Cloud), DevOps & containerization, 
      and cybersecurity. I'm passionate about implementing secure, efficient IT solutions and helping 
      organizations optimize their technology infrastructure through automation and best practices.
    </p>
    <p>
      My experience spans across web development, system administration, network configuration, 
      and security implementation. I enjoy working with cutting-edge technologies and solving 
      complex technical challenges in both local and cloud environments.
    </p>
              <p>
                When I'm not studying or working, you'll find me exploring new technologies, contributing 
                to IT communities, or learning about the latest cybersecurity trends. I believe in continuous 
                learning and staying updated with evolving IT landscapes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h4>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
