"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-20 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Information I Collect
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              This portfolio website is designed to showcase my professional work and experience. 
              I may collect the following types of information:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Contact information provided through the contact form (name, email, message)</li>
              <li>Website usage analytics and performance data</li>
              <li>Information you voluntarily provide through email or other communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              How I Use Your Information
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I use the information I collect to:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Respond to your inquiries and messages</li>
              <li>Improve my website and services</li>
              <li>Analyze website performance and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Data Protection
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I am committed to protecting your privacy and personal information. 
              I implement appropriate security measures to protect against unauthorized 
              access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Third-Party Services
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              This website may use third-party services for analytics, hosting, and 
              communication. These services have their own privacy policies, and I 
              encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Me
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              If you have any questions about this Privacy Policy or my data practices, 
              please contact me at{" "}
              <a
                href="mailto:nirajthapa@niraj.info"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              >
                nirajthapa@niraj.info
              </a>.
            </p>
          </section>

          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          <section className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              This Privacy Policy may be updated from time to time. I will notify you 
              of any changes by posting the new Privacy Policy on this page and updating 
              the "Last updated" date.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
