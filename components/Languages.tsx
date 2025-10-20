'use client'

import { motion } from 'framer-motion'
import { Translate } from '@phosphor-icons/react'

const Languages = () => {
  const languages = [
    {
      name: 'English',
      level: 'Native/Advanced',
      proficiency: 95,
    },
    {
      name: 'Nepali',
      level: 'Native',
      proficiency: 100,
    },
    {
      name: 'Hindi',
      level: 'Native/Advanced',
      proficiency: 95,
    },
    {
      name: 'French',
      level: 'Basic',
      proficiency: 40,
    },
  ]

  return (
    <section id="languages" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Languages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Multilingual communication skills for global collaboration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Translate className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{language.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{language.level}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.proficiency}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{language.proficiency}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Languages
