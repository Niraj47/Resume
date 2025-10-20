'use client'

import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, ArrowSquareOut } from '@phosphor-icons/react'

const Volunteering = () => {
  const volunteering = [
    {
      title: 'Volunteer Web Developer & IT Support',
      organization: 'Janta ko Nimti',
      location: 'Remote',
      period: 'September 2025',
      description: 'Designed and developed the official website for Janta ko Nimti, a non-profit organization.',
      achievements: [
        'Designed and developed the official website for Janta ko Nimti, a non-profit organization',
        'Configured and secured the organization\'s email server with SMTP, IMAP, and POP protocols',
        'Implemented SSL/TLS certificates, HTTPS, and server hardening to protect sensitive data',
        'Created the official logo and digital branding to strengthen the organization\'s outreach',
        'Donated personal funds and technical resources to support humanitarian efforts and assist individuals in need',
      ],
      technologies: ['Web Development', 'Email Servers', 'SSL/TLS', 'Non-profit', 'Volunteer Work'],
      link: 'https://jantakonimti.com',
    },
  ]

  return (
    <section id="volunteering" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Volunteering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contributing to meaningful causes through technology and community service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {volunteering.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{volunteer.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <span className="font-semibold text-lg">{volunteer.organization}</span>
                    </div>
                  </div>
                </div>
                {volunteer.link && (
                  <a
                    href={volunteer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    <ArrowSquareOut className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="mr-4">{volunteer.location}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{volunteer.period}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {volunteer.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Contributions:</h4>
                <ul className="space-y-2">
                  {volunteer.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {volunteer.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Volunteering
