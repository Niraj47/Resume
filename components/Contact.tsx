'use client'

import { motion } from 'framer-motion'
import { Envelope, Phone, MapPin, LinkedinLogo, GithubLogo, XSquare } from '@phosphor-icons/react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Envelope,
      title: 'Email',
      value: 'nirajthapa@niraj.info',
      link: 'mailto:nirajthapa@niraj.info',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (437) 436-6898',
      link: 'tel:+14374366898',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Toronto, Canada',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: LinkedinLogo,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ciphercore/',
      color: 'hover:text-blue-600',
    },
    {
      icon: GithubLogo,
      name: 'GitHub',
      url: 'https://github.com/Niraj47',
      color: 'hover:text-gray-900',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-colors duration-200 shadow-md hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form 
              action="https://formspree.io/f/mvgkeelp" 
              method="POST" 
              className="space-y-6"
              onSubmit={(e) => {
                // Show success message and clear form
                const form = e.target as HTMLFormElement;
                const successDiv = document.getElementById('formSuccess');
                
                // Reset form immediately
                form.reset();
                
                // Show success message
                if (successDiv) {
                  successDiv.classList.remove('hidden');
                  successDiv.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                  if (successDiv) {
                    successDiv.classList.add('hidden');
                  }
                }, 5000);
              }}
            >
              <input type="hidden" name="_subject" value="New message from your portfolio" />
              <input type="hidden" name="_next" value="#contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Send Message
              </motion.button>
            </form>
            
            <div id="formSuccess" className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg hidden">
              Message sent successfully! I'll get back to you soon.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Prefer to download my resume? 
          </p>
          <a
            href="/Niraj_Thapa_Resume.pdf"
            download="Niraj_Thapa_Resume.pdf"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Envelope className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
