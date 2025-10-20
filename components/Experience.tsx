'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowSquareOut } from '@phosphor-icons/react'

const Experience = () => {
    const experiences = [
      {
        title: 'Founder & Developer',
        company: 'Cipherpit IT Solutions',
        location: 'Remote',
        period: 'Current',
        description: 'Currently developing Cipherpit.com, a startup project focused on delivering innovative IT and cybersecurity solutions.',
        achievements: [
          'Currently developing Cipherpit.com, a startup project focused on delivering innovative IT and cybersecurity solutions',
          'Designing and building a scalable website architecture and backend infrastructure',
          'Setting up a secure email and authentication system with SMTP, IMAP, and POP integration',
          'Implementing SSL/TLS encryption, firewalls, and access controls to ensure data integrity',
          'Leading branding, UI/UX design, and digital identity creation for the company',
          'Exploring long-term deployment options using Azure and AWS for high availability and security',
        ],
        technologies: ['Web Development', 'Cybersecurity', 'Cloud Infrastructure', 'SSL/TLS', 'Azure', 'AWS'],
      },
      {
        title: 'Web Developer & System Administrator',
        company: 'niraj.info',
        location: 'Remote',
        period: 'Current',
        description: 'Built and manage a personal website to showcase resume, portfolio, and professional growth.',
        achievements: [
          'Built and manage a personal website to showcase my resume, portfolio, and professional growth',
          'Deployed a private mail server (SMTP, IMAP, POP) for personal and project communications',
          'Integrated SSL/TLS certificates and backend monitoring for secure and stable performance',
          'Continuously experiment with new technologies in web design, automation, and cybersecurity',
        ],
        technologies: ['Web Development', 'System Administration', 'Email Servers', 'SSL/TLS', 'Monitoring'],
      },
      {
        title: 'Customer Service Associate',
        company: 'Scotiabank',
        location: 'North York, Toronto',
        period: 'March 2025 - Present',
        description: 'Serve as the primary point of contact for clients, providing outstanding customer service and personalized banking assistance.',
        achievements: [
          'Serve as the primary point of contact for clients, providing outstanding customer service and personalized banking assistance',
          'Perform day-to-day banking transactions with accuracy, efficiency, and professionalism',
          'Engage customers to understand their financial needs and provide tailored solutions',
          'Promote digital banking tools and assist clients in using mobile and self-service platforms',
          'Identify sales opportunities and contribute to the branch\'s performance targets',
          'Foster long-term relationships with customers through trust and proactive service',
        ],
        technologies: ['Banking Systems', 'Customer Service', 'Digital Banking', 'Financial Products'],
      },
      {
        title: 'Volunteer Web Developer & IT Support',
        company: 'Janta ko Nimti',
        location: 'Remote',
        period: 'September 2025',
        description: 'Designed and developed the official website for Janta ko Nimti, a non-profit organization.',
        achievements: [
          'Designed and developed the official website for Janta ko Nimti, a non-profit organization',
          'Set up and configured a secure email server supporting SMTP, IMAP, and POP protocols',
          'Created the organization\'s logo and visual branding assets',
          'Deployed and hosted the website with SSL and TLS encryption to ensure data security',
          'Implemented best practices for web and server security, including HTTPS enforcement',
          'Contributed services voluntarily and donated technical resources to support the organization\'s mission',
        ],
        technologies: ['Web Development', 'Email Servers', 'SSL/TLS', 'Non-profit', 'Volunteer Work'],
      },
      {
        title: 'Full-Stack Web Developer & IT Administrator',
        company: 'Daramax Construction Services',
        location: 'Remote',
        period: 'June 2025 - July 2025',
        description: 'Designed and developed the official Daramax Construction Services website from scratch.',
        achievements: [
          'Designed and developed the official Daramax Construction Services website from scratch',
          'Set up and configured a custom email server supporting SMTP, IMAP, and POP protocols',
          'Created the company\'s logo and branding materials for professional identity',
          'Deployed and hosted the website on a secure and reliable web server',
          'Implemented SSL and TLS certificates to ensure encrypted and secure connections',
          'Strengthened website and email server security through configuration hardening and HTTPS enforcement',
        ],
        technologies: ['Web Development', 'Email Servers', 'SSL/TLS', 'Logo Design', 'Security Hardening'],
      },
      {
        title: 'Cashier & Front Desk Assistant',
        company: 'Kajun Chicken & Seafoods',
        location: 'North York, Toronto',
        period: 'April 2023 – August 2023',
        description: 'Delivered a welcoming first impression to all customers, ensuring high satisfaction in a fast-paced restaurant environment.',
        achievements: [
          'Delivered a welcoming first impression to all customers, ensuring high satisfaction',
          'Managed cash register operations and balanced daily transactions with zero discrepancies',
          'Prepared and reviewed daily financial summaries for operational transparency',
          'Assisted in onboarding and evaluating new staff members',
          'Maintained cleanliness and organization to meet health and safety standards',
        ],
        technologies: ['Cash Handling', 'Customer Service', 'Financial Management', 'Staff Training'],
      },
      {
        title: 'Sales Associate',
        company: 'Pashupati Mobile & Repair Center',
        location: 'Gaushala, Kathmandu',
        period: 'June 2021 - November 2022',
        description: 'Delivered outstanding customer service by understanding needs and providing tailored recommendations in mobile device sales and repair.',
        achievements: [
          'Delivered outstanding customer service by understanding needs and providing tailored recommendations',
          'Successfully handled customer complaints, ensuring high satisfaction levels',
          'Trained new staff on store policies and accounting procedures to improve efficiency',
        ],
        technologies: ['Sales', 'Customer Service', 'Mobile Technology', 'Staff Training'],
      },
    ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of growth, learning, and impactful contributions across various roles and companies.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    <span>{exp.company}</span>
                    <ArrowSquareOut className="w-4 h-4 ml-2" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
