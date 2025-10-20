'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, DeviceMobile, Palette, Cpu } from '@phosphor-icons/react'

const Skills = () => {
    const skillCategories = [
      {
        icon: Cloud,
        title: 'Cloud Platforms',
        skills: [
          { name: 'Microsoft Azure', level: 85 },
          { name: 'Amazon Web Services (AWS)', level: 80 },
          { name: 'Google Cloud Platform (GCP)', level: 75 },
          { name: 'Terraform Cloud & Infrastructure as Code (IaC)', level: 80 },
          { name: 'Cloud Security', level: 75 },
          { name: 'Cloud Architecture', level: 70 },
        ],
      },
      {
        icon: Database,
        title: 'Operating Systems & Server Management',
        skills: [
          { name: 'Linux Administration', level: 85 },
          { name: 'Windows Server', level: 80 },
          { name: 'Active Directory', level: 75 },
          { name: 'Group Policy', level: 70 },
          { name: 'VMware Workstation / VirtualBox', level: 85 },
          { name: 'Shell scripting & system administration', level: 80 },
        ],
      },
      {
        icon: Cpu,
        title: 'Security & Monitoring',
        skills: [
          { name: 'SIEM', level: 70 },
          { name: 'LDAP', level: 75 },
          { name: 'Firewall Configuration', level: 80 },
          { name: 'IDS/IPS Management', level: 70 },
          { name: 'SSL/TLS Certificates & HTTPS Configuration', level: 85 },
          { name: 'Network Security & Threat Detection', level: 75 },
        ],
      },
      {
        icon: Code,
        title: 'DevOps & Containerization',
        skills: [
          { name: 'Docker', level: 75 },
          { name: 'Git', level: 85 },
          { name: 'GitHub Actions', level: 70 },
          { name: 'CI/CD Pipelines', level: 75 },
          { name: 'Kubernetes (Pods, Deployments, Ingress)', level: 70 },
          { name: 'YAML Configuration Management', level: 75 },
          { name: 'Version Control (Git / GitHub)', level: 85 },
        ],
      },
      {
        icon: Database,
        title: 'Database Management',
        skills: [
          { name: 'MySQL', level: 80 },
          { name: 'MariaDB', level: 75 },
          { name: 'Microsoft SQL Server', level: 70 },
          { name: 'Azure SQL', level: 75 },
          { name: 'Basic PostgreSQL', level: 65 },
          { name: 'SQLite (local apps & lab setups)', level: 70 },
          { name: 'Database Backup & Replication', level: 75 },
          { name: 'Query Optimization & Access Control', level: 70 },
        ],
      },
      {
        icon: Code,
        title: 'Scripting & Automation',
        skills: [
          { name: 'Bash', level: 80 },
          { name: 'PowerShell', level: 75 },
          { name: 'Cron Jobs', level: 85 },
          { name: 'systemctl', level: 80 },
          { name: 'SSH configuration', level: 85 },
          { name: 'Python', level: 70 },
          { name: 'Terraform for Cloud Infrastructure', level: 75 },
          { name: 'API Integration & Automation', level: 70 },
          { name: 'Configuration Management', level: 75 },
        ],
      },
      {
        icon: DeviceMobile,
        title: 'Networking & Protocols',
        skills: [
          { name: 'DNS', level: 85 },
          { name: 'DHCP', level: 80 },
          { name: 'VLANs', level: 75 },
          { name: 'TCP/IP', level: 85 },
          { name: 'NAT', level: 80 },
          { name: 'OSPF', level: 70 },
          { name: 'Routing & Switching', level: 75 },
          { name: 'Wireshark', level: 80 },
          { name: 'Access Control Lists', level: 75 },
          { name: 'Cisco (2960) & Aruba (6300) Switch Configuration', level: 70 },
          { name: 'WireGuard, IPsec VPN', level: 75 },
          { name: 'SSH Tunneling', level: 80 },
          { name: 'Load Balancing & Traffic Management', level: 75 },
          { name: 'IPv4/IPv6 Network Design', level: 70 },
          { name: 'Cisco IOS CLI Management', level: 75 },
          { name: 'Subnetting & Static Routing', level: 80 },
        ],
      },
      {
        icon: Palette,
        title: 'Web & Email Servers',
        skills: [
          { name: 'Apache / Nginx Web Servers', level: 85 },
          { name: 'Postfix / Dovecot Mail Servers', level: 80 },
          { name: 'Roundcube Webmail Configuration', level: 75 },
          { name: 'HTTPS Enforcement & SSL/TLS', level: 85 },
          { name: 'Nextcloud Private Cloud Setup', level: 80 },
          { name: 'DNS Records (A/ MX/ SPF/ DKIM & DMARC)', level: 75 },
        ],
      },
      {
        icon: Cpu,
        title: 'AI & Machine Learning',
        skills: [
          { name: 'TensorFlow / PyTorch (basic modeling)', level: 60 },
          { name: 'Scikit-learn / Pandas / NumPy', level: 65 },
          { name: 'Azure Cognitive Services (AI & NLP)', level: 70 },
          { name: 'Local AI Environments (Pinokio/ Ollama & WebUI)', level: 75 },
          { name: 'GPU Acceleration (NVIDIA RTX 3060)', level: 70 },
        ],
      },
    ]

    const additionalSkills = [
      'Microsoft Office Suite',
      'Time Management',
      'Problem Solving',
      'Customer Service',
      'Git / GitHub Version Control',
      'Visual Studio Code / Jupyter Notebooks',
      'Project Documentation (Markdown/ Notion)',
      'Troubleshooting & Technical Support',
    ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that I use to build amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
