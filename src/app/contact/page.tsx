import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with UK All Jobs. We're here to help with any questions about job listings or our platform.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark-900 dark:text-dark-50 mb-4">Contact Us</h1>
        <p className="text-xl text-dark-600 dark:text-dark-300">
          Have a question? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6">
          <h2 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                Subject
              </label>
              <select id="subject" name="subject" className="input">
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="report">Report an Issue</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6">
            <h2 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-500 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-dark-50">Email</h3>
                  <p className="text-dark-600 dark:text-dark-300">support@ukalljobs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-dark-900 dark:text-dark-50">Response Time</h3>
                  <p className="text-dark-600 dark:text-dark-300">Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-200 dark:border-dark-700 p-6">
            <h2 className="text-xl font-semibold text-dark-900 dark:text-dark-50 mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-dark-900 dark:text-dark-50 mb-1">How do I apply for a job?</h3>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Click on any job listing and then click the &quot;Apply Now&quot; button.
                  You&apos;ll be redirected to the employer&apos;s application page.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-dark-900 dark:text-dark-50 mb-1">Is it free to use?</h3>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Yes! Searching and applying for jobs on UK All Jobs is completely free.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-dark-900 dark:text-dark-50 mb-1">How often are jobs updated?</h3>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  We add new job listings daily to ensure you have access to the latest opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
