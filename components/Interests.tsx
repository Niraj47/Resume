'use client'

import { motion } from 'framer-motion'
import { Shield, Cloud, Code, Globe, GameController, GlobeHemisphereWest } from '@phosphor-icons/react'

const Interests = () => {
  const interestCategories = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      interests: [
        'Vulnerability Research',
        'Ethical Hacking & Penetration Testing',
        'Malware & Memory Forensics',
        'Security Information & Event Management (SIEM)',
      ],
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      interests: [
        'Automation',
        'Infrastructure as Code (Terraform)',
        'Cloud Automation & Scalability',
        'Serverless & Multi-Region Deployments',
        'Microsoft Azure, AWS & Google Cloud',
      ],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Code,
      title: 'DevOps & Containers',
      interests: [
        'Docker & Kubernetes',
        'CI/CD Pipelines (GitHub Actions)',
        'Container Security & Orchestration',
      ],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Globe,
      title: 'Networking',
      interests: [
        'VLAN Design & Routing Protocols',
        'VPN & Firewall Configuration',
        'Network Traffic Analysis (Wireshark)',
      ],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Digital Privacy & Encryption',
      interests: [
        'VPNs',
        'Cryptography',
        'IDS/IPS',
        'SSL/TLS Certificates & HTTPS Enforcement',
        'Data Encryption Standards & Key Management',
        'Secure Email & Identity Protection',
      ],
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Globe,
      title: 'Financial Technologies',
      interests: [
        'Banking Security',
        'Customer Engagement',
        'Blockchain Fundamentals & Smart Contracts',
        'FinTech Security & API Integration',
        'Cloud-Based Financial Platforms',
      ],
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: GlobeHemisphereWest,
      title: 'Travel & Culture',
      interests: [
        'Cultural Immersion',
        'Language Learning',
        'Global Networking',
        'Exploring Global Technology Trends',
      ],
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: GameController,
      title: 'Logic & Strategy Games',
      interests: [
        'Puzzle Solving',
        'Cybersecurity Challenges',
        'Simulation & Management Games',
      ],
      color: 'bg-pink-100 text-pink-600',
    },
  ]

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Interests
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Areas of passion and continuous learning in technology and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {interestCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.interests.map((interest, interestIndex) => (
                  <li key={interestIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests
