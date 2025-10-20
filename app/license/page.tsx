"use client";

import { motion } from "framer-motion";

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-20 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          MIT License
        </h1>

        <p className="mb-4">Copyright (c) {new Date().getFullYear()} Niraj Thapa</p>

        <p className="mb-4">
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </p>

        <p className="mb-4">
          The above copyright notice and this permission notice shall be included in
          all copies or substantial portions of the Software.
        </p>

        <p className="mb-4">
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </p>

        <hr className="my-10 border-gray-300 dark:border-gray-700" />

        <section className="text-sm leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">Usage Policy</h2>
          <p className="mb-3">
            This portfolio project is open source for learning and inspiration. You may
            use, adapt, or build upon it, provided that you retain proper attribution to
            the original author and include this license in derivative works.
          </p>
          <p className="mb-3">
            Please do not use the author's name, logo, or likeness for commercial
            endorsement without prior written consent.
          </p>
          <p>
            For questions about usage or collaboration, please reach out at{" "}
            <a
              href="mailto:nirajthapa@niraj.info"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              nirajthapa@niraj.info
            </a>.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
