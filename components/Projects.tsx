'use client'

import { motion } from 'framer-motion'
import { Calendar } from '@phosphor-icons/react'
import { useState } from 'react'

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

  const toggleProjectExpansion = (index: number) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedProjects(newExpanded)
  }

  const projects = [
    {
      title: 'Penetration Testing & Ethical Hacking Labs',
      description: 'Targeted self-deployed services (web, email, Wi-Fi) on virtual machines to test for real-world vulnerabilities. Used tools like Ettercap, Nmap, Wireshark, and Metasploit in Kali Linux VM environments.',
      image: '/api/placeholder/600/400',
      technologies: ['Penetration Testing', 'Kali Linux', 'Security', 'Nmap', 'Wireshark', 'Metasploit'],
      features: [
        'Vulnerability assessment and testing',
        'Network penetration testing',
        'Web application security testing',
        'Wi-Fi security analysis',
        'Ethical hacking methodologies',
      ],
      status: 'In Progress',
    },
    {
      title: 'Full-Stack Web Server Deployment (Local & Cloud)',
      description: 'Deployed and secured Apache/Nginx-based web servers on virtual machines using VirtualBox, VMware, and cloud platforms. Configured SSL/TLS encryption, custom domains, and hosted multiple services in sandboxed environments.',
      image: '/api/placeholder/600/400',
      technologies: ['Apache', 'Nginx', 'SSL/TLS', 'VirtualBox', 'VMware', 'Cloud Platforms'],
      features: [
        'Multi-server deployment architecture',
        'SSL/TLS encryption configuration',
        'Custom domain setup and management',
        'Security hardening and monitoring',
        'Sandboxed environment hosting',
      ],
      status: 'Completed',
    },
    {
      title: 'Load Balancer & High Availability Setup',
      description: 'Built a simulated multi-server environment using VMs on Linux and Windows and on Cloud. Configured Nginx-based load balancers and tested failover in a virtualized lab.',
      image: '/api/placeholder/600/400',
      technologies: ['Load Balancing', 'Nginx', 'High Availability', 'Linux', 'Windows', 'Cloud'],
      features: [
        'Multi-server environment simulation',
        'Nginx-based load balancing',
        'Failover testing and implementation',
        'Virtualized lab environment',
        'Cross-platform compatibility',
      ],
      status: 'Completed',
    },
    {
      title: 'Email Server & Webmail Configuration',
      description: 'Deployed Postfix + Dovecot for mail delivery and retrieval. Installed and configured Roundcube Webmail with SSL/TLS to provide secure user access. Integrated DNS and MX records to support external mail flow.',
      image: '/api/placeholder/600/400',
      technologies: ['Postfix', 'Dovecot', 'Roundcube', 'SSL/TLS', 'DNS', 'MX Records'],
      features: [
        'Postfix mail server configuration',
        'Dovecot IMAP/POP3 setup',
        'Roundcube webmail interface',
        'SSL/TLS encryption',
        'DNS and MX record integration',
      ],
      status: 'Completed',
    },
    {
      title: 'Private Cloud Collaboration Suite',
      description: 'Self-hosted Nextcloud instance on Linux VMs with a MariaDB backend. Enabled secure access using HTTPS and managed file sync, storage, and database operations.',
      image: '/api/placeholder/600/400',
      technologies: ['Nextcloud', 'MariaDB', 'HTTPS', 'Linux', 'File Sync', 'Cloud Storage'],
      features: [
        'Self-hosted Nextcloud deployment',
        'MariaDB database backend',
        'HTTPS secure access',
        'File synchronization',
        'Cloud storage management',
      ],
      status: 'Completed',
    },
    {
      title: 'Virtualization & Lab Environments',
      description: 'Designed and maintained custom virtual labs using VMware Workstation and VirtualBox. Deployed multiple VMs to simulate enterprise networks, security attacks, and disaster recovery scenarios.',
      image: '/api/placeholder/600/400',
      technologies: ['VMware', 'VirtualBox', 'Virtualization', 'Enterprise Networks', 'Security Testing'],
      features: [
        'Custom virtual lab environments',
        'Enterprise network simulation',
        'Security attack testing',
        'Disaster recovery scenarios',
        'Multi-VM orchestration',
      ],
      status: 'Completed',
    },
    {
      title: 'Personal VPN Server (WireGuard & IPsec)',
      description: 'Deployed self-hosted WireGuard and IPsec VPN servers for secure remote access. Configured static routing, key-based authentication, and multi-client connections.',
      image: '/api/placeholder/600/400',
      technologies: ['WireGuard', 'IPsec', 'VPN', 'Static Routing', 'Key Authentication', 'Multi-client'],
      features: [
        'Self-hosted VPN deployment',
        'WireGuard and IPsec configuration',
        'Static routing setup',
        'Key-based authentication',
        'Multi-client connections',
      ],
      status: 'Completed',
    },
    {
      title: 'Cloud Infrastructure Automation (Terraform + GitHub Actions)',
      description: 'Automated VM deployments on Azure using Terraform Cloud integrated with GitHub Actions. Deployed Windows Server 2022 with nested virtualization for multi-VM project environments.',
      image: '/api/placeholder/600/400',
      technologies: ['Terraform', 'GitHub Actions', 'Azure', 'Windows Server 2022', 'Nested Virtualization'],
      features: [
        'Terraform Cloud integration',
        'GitHub Actions automation',
        'Azure VM deployments',
        'Windows Server 2022 setup',
        'Nested virtualization configuration',
      ],
      status: 'Completed',
    },
    {
      title: 'Cross-Cloud Networking & Management',
      description: 'Configured and managed environments across Azure, AWS, and Google Cloud platforms. Implemented secure inter-network connectivity, IAM policies, and cost optimization practices.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure', 'AWS', 'Google Cloud', 'Inter-network Connectivity', 'IAM Policies', 'Cost Optimization'],
      features: [
        'Multi-cloud environment management',
        'Cross-platform networking',
        'Secure inter-network connectivity',
        'IAM policy implementation',
        'Cost optimization strategies',
      ],
      status: 'Completed',
    },
    {
      title: 'Containerization with Docker',
      description: 'Designed and containerized multi-service applications using Docker and Docker Compose. Built and optimized custom Dockerfiles for web servers, databases, and backend APIs.',
      image: '/api/placeholder/600/400',
      technologies: ['Docker', 'Docker Compose', 'Containerization', 'Custom Dockerfiles', 'Multi-service Apps'],
      features: [
        'Multi-service application containerization',
        'Docker Compose orchestration',
        'Custom Dockerfile optimization',
        'Container networking and storage',
        'CI/CD integration',
      ],
      status: 'Completed',
    },
    {
      title: 'Kubernetes Deployment & Cluster Management',
      description: 'Deployed a multi-node Kubernetes cluster for orchestrating containerized microservices. Configured Pods, Deployments, Services, and Ingress Controllers for app scaling and load balancing.',
      image: '/api/placeholder/600/400',
      technologies: ['Kubernetes', 'Container Orchestration', 'Pods', 'Deployments', 'Services', 'Ingress Controllers'],
      features: [
        'Multi-node Kubernetes cluster deployment',
        'Container orchestration setup',
        'Pod and deployment configuration',
        'Service and ingress management',
        'Cluster monitoring and scaling',
      ],
      status: 'Completed',
    },
    {
      title: 'Enterprise Network Configuration (Cisco & Aruba Switches)',
      description: 'Configured and managed Cisco (2960) and Aruba (6300) switches for enterprise-level networking labs. Created and tested VLANs, trunk links, and inter-VLAN routing for multi-subnet communication.',
      image: '/api/placeholder/600/400',
      technologies: ['Cisco 2960', 'Aruba 6300', 'VLANs', 'Trunk Links', 'Inter-VLAN Routing', 'Enterprise Networking'],
      features: [
        'Enterprise switch configuration',
        'VLAN design and implementation',
        'Trunk link setup',
        'Inter-VLAN routing configuration',
        'Network troubleshooting and optimization',
      ],
      status: 'Completed',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-200 flex items-center justify-center">
                  <div className="text-6xl text-primary-600 font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, expandedProjects.has(index) ? project.features.length : 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm">
                        <button
                          onClick={() => toggleProjectExpansion(index)}
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                        >
                          {expandedProjects.has(index) 
                            ? 'Show less' 
                            : `+${project.features.length - 3} more features`
                          }
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
