'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Trophy } from '@phosphor-icons/react'

const Certifications = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'President\'s Honour',
      issuer: 'Seneca Polytechnic',
      date: 'Winter 2025',
      description: 'Recognition for outstanding academic achievement and excellence.',
    },
  ]

    const certifications = [
      {
        icon: BookOpen,
        title: 'Junior Cybersecurity Analyst Career Path',
        issuer: 'Cisco',
        date: 'September 2025',
        description: 'Comprehensive career path certification covering cybersecurity analysis fundamentals, threat detection, incident response, and security operations.',
        link: 'https://www.credly.com/badges/0bea95c4-2c3e-4ebb-b392-52adf6c94f27/linked_in_profile',
      },
      {
        icon: BookOpen,
        title: 'Ethical Hacker',
        issuer: 'Cisco',
        date: 'September 2025',
        description: 'Professional certification demonstrating expertise in ethical hacking methodologies, penetration testing, vulnerability assessment, and security testing techniques.',
        link: 'https://www.credly.com/badges/7c127681-178a-4ccf-9490-1161e919b525/linked_in_profile',
      },
      {
        icon: BookOpen,
        title: 'Ethical Hacking Series',
        issuer: 'LinkedIn Learning',
        date: 'January – April 2025',
        description: 'Comprehensive series covering all aspects of ethical hacking and penetration testing including Footprinting and Reconnaissance, Scanning Networks, Enumeration, System Hacking, Social Engineering, Vulnerability Analysis, Malware Analysis, Denial of Service, Wireless Networks, Session Hijacking, Web & Application Hacking, Mobile & IoT Device Hacking, Evading IDS, Firewalls, and Honeypots, and Cryptography.',
        link: 'https://www.linkedin.com/learning/certificates/b19e19c482ac484035a8ac07a178edef137227ad576543099fb0b940b7a2b372?u=2169170',
      },
      {
        icon: BookOpen,
        title: 'AWS Academy Graduate: AWS Cloud Foundations',
        issuer: 'Amazon Web Services (AWS)',
        date: 'March 2025',
        description: 'Comprehensive understanding of AWS cloud concepts, services, and best practices.',
        link: 'https://www.credly.com/badges/7d736a37-26c0-4c52-b9ab-9fb89fbca38d/public_url',
      },
      {
        icon: BookOpen,
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'November 2024',
        description: 'Fundamental understanding of cybersecurity concepts and best practices.',
        link: 'https://www.credly.com/badges/75accad4-435a-4e95-8a63-2a72cd59994d/linked_in_profile',
      },
      {
        icon: BookOpen,
        title: 'Configure and Manage Automation using Microsoft Defender for Endpoint',
        issuer: 'Microsoft',
        date: 'November 2024',
        description: 'Advanced knowledge of Microsoft Defender automation and endpoint security management.',
        link: 'https://learn.microsoft.com/api/achievements/share/en-ca/NirajThapa-8282/WZEJRQ9N?sharingId=E124F20629F1A4C9',
      },
      {
        icon: BookOpen,
        title: 'IT Security Foundations: Core Concepts',
        issuer: 'LinkedIn Learning',
        date: 'January 2023',
        description: 'Core concepts in IT security, risk management, and security frameworks.',
        link: 'https://www.linkedin.com/learning/certificates/24a24e2ba816289befdcb6bafe96aca78d75a5b3855f6c5b96bfa4705faa85e7?u=2169170',
      },
      {
        icon: BookOpen,
        title: 'Business Analytics: Marketing Data',
        issuer: 'LinkedIn Learning',
        date: 'January 2023',
        description: 'Analytics and data interpretation for marketing and business intelligence.',
        link: 'https://www.linkedin.com/learning/certificates/b6724c0753d05ef70c92dc2ee101baa8eb7f9a1da9bd5e458d56f260a9fccb30?u=2169170',
      },
    ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Certifications & Awards</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional certifications and academic achievements.
          </p>
        </motion.div>

        {/* Awards - Single Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Awards</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex-1 min-w-[300px] max-w-[400px]"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-semibold">{award.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{award.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications - 2 per line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-semibold">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
