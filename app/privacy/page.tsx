import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | StudySprint AI',
  description: 'Privacy Policy for StudySprint AI, explaining how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-lg">Effective Date: April 20, 2026</p>
        </div>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">1. Introduction</h2>
            <p>
              Welcome to StudySprint AI. We are deeply committed to protecting your privacy and ensuring the security of your personal and academic data. This Privacy Policy explains how we collect, use, store, and protect your information when you use the StudySprint AI platform. Our practices are designed to comply with global privacy standards, including the General Data Protection Regulation (GDPR) and the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">2. Information We Collect</h2>
            <p className="mb-4">We collect information to provide and improve our educational and productivity services. The types of data we collect include:</p>
            
            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">2.1 User Account Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Signup Information:</strong> When you create an account, we collect your first name, last name, and email address for identification and authentication purposes.</li>
              <li><strong>Academic Planning Data:</strong> To provide our core services, we securely store the academic data you input into the app, including your enrolled courses, upcoming assignments, academic deadlines, reminders, and custom study plans.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">2.2 Analytics and Usage Data</h3>
            <p className="mb-2">We use Google Analytics 4 (GA4) to understand how students interact with our platform. This automatically collects:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Metrics:</strong> Page views, session durations, and interaction events.</li>
              <li><strong>Technical Information:</strong> Device type, operating system, and browser dimensions.</li>
              <li><strong>Geographic Data:</strong> Approximate location based on your IP address (which is anonymized by default in GA4).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">3. How We Use Your Data</h2>
            <p className="mb-4">We strictly use your information to operate, personalize, and improve StudySprint AI. Specifically, we use it to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our core academic tracking features, ensuring you are notified of upcoming assignments and study plan milestones.</li>
              <li>Secure your account and authenticate your logins.</li>
              <li>Communicate important updates regarding your account or changes to our platform.</li>
              <li>Analyze aggregate, non-personally identifiable usage data through Google Analytics to improve application performance and design user-centric features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">4. Data Storage and Security</h2>
            <p>
              Your academic data and personal information are stored securely in modernized database instances. We employ industry-standard security measures, including encryption in transit (HTTPS/TLS) and robust database access controls, to protect your data against unauthorized access, alteration, disclosure, or destruction. Passwords and sensitive authentication tokens are strictly hashed and securely managed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">5. Your Data Rights</h2>
            <p className="mb-4">Under applicable data protection laws, including GDPR and PIPEDA, you maintain total control over your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You can request a copy of the personal and academic data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can update or correct inaccuracies within your user profile at any time.</li>
              <li><strong>Right to Erasure:</strong> You have the "right to be forgotten." You can request the permanent deletion of your account, which will permanently erase all associated courses, study plans, and assignments from our active databases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">6. Cookie Policy</h2>
            <p>
              StudySprint AI uses cookies—small text files stored on your device—to function effectively. We utilize essential cookies required for authentication and session management. Additionally, we use Google Analytics 4 cookies to assign anonymous client identifiers that help us measure user retention and page interaction. You can configure your browser to reject analytical cookies, though doing so will not restrict your access to core platform features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, concerns about your data, or if you wish to exercise your data rights, please contact our privacy compliance team at:
            </p>
            <div className="bg-primary-50 border border-primary-100 p-6 rounded-lg">
              <p className="font-semibold text-primary-900">StudySprint AI Privacy Team</p>
              <p className="text-primary-800 mt-2">Email: <a href="mailto:privacy@studysprint.ai" className="hover:underline">privacy@studysprint.ai</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center pt-8 border-t border-slate-100">
          <Link href="/" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
            &larr; Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
