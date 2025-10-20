'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from '@phosphor-icons/react'

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      title: 'Commerce with Applied Computer Studies - Higher Secondary',
      institution: 'Global College of Management',
      location: 'Kathmandu, Nepal',
      period: 'July 2019 – June 2021',
      description: 'Relevant Coursework: Economics, Business Mathematics, Accounting, Computer Science (GPA: 3.33)',
      courses: [
        'Economics',
        'Business Mathematics',
        'Accounting',
        'Computer Science',
        'Mathematics',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Informatics and Security - Bachelor (Partially Completed)',
      institution: 'Seneca Polytechnic',
      location: 'Toronto, Canada',
      period: 'January 2023 - April 2024',
      description: 'Studied advanced information security concepts, cryptography, and secure system design.',
      courses: [
        'Information Security Concepts',
        'Cryptography',
        'Secure System Design',
        'Network Security',
        'Risk Management',
        'Security Architecture',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Computer System Technician - Diploma',
      institution: 'Seneca Polytechnic',
      location: 'Toronto, Canada',
      period: 'September 2024 - December 2025',
      description: 'Focusing on computer systems, network administration, and IT security fundamentals.',
      courses: [
        'Computer Systems Architecture',
        'Network Administration',
        'IT Security Fundamentals',
        'Operating Systems (Linux, Windows)',
        'Database Management',
        'Programming (Python, PowerShell, Bash)',
        'Cloud Computing (Azure, AWS)',
        'Cybersecurity Principles',
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My academic background and educational journey.
              </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-semibold mb-1">{edu.institution}</p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{edu.location}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{edu.description}</p>
                      {edu.courses && (
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                          {edu.courses.map((course, courseIndex) => (
                            <li key={courseIndex}>{course}</li>
                          ))}
                        </ul>
                      )}
                    </div>
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

export default Education