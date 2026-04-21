import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | StudySprint AI',
  description: 'Terms of Service and End User License Agreement for StudySprint AI.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-lg">Effective Date: April 20, 2026</p>
        </div>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using StudySprint AI ("the Platform"), you agree to abide by these Terms of Service. If you do not agree with any part of these terms, you must discontinue your use of our platform immediately. The Platform is designed to serve college and university students by providing AI-powered academic planning and productivity tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">2. Description of Service</h2>
            <p className="mb-4">
              StudySprint AI offers an array of digital tools tailored for student success, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Course and assignment management tracking.</li>
              <li>Artificial Intelligence-driven study plan generation.</li>
              <li>Automated reminders for academic deadlines.</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any feature of the platform at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">3. User Accounts and Responsibilities</h2>
            <p className="mb-4">
              To utilize StudySprint AI, you must register for an account. By registering, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information during the registration process.</li>
              <li>Maintain the security and confidentiality of your login credentials.</li>
              <li>Take full responsibility for any activities or actions that occur under your account.</li>
              <li>Notify us immediately of any unauthorized use of your account or security breaches.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">4. Acceptable Use Policy</h2>
            <p className="mb-4">
              You agree not to use the Platform in any manner that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violates any local, provincial, national, or international law or academic integrity policies.</li>
              <li>Involves the scraping, data mining, or automated exploitation of our systems or AI models.</li>
              <li>Interferes with the standard operation of the service or disrupts the experience of other students.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">5. Privacy</h2>
            <p>
              Your use of StudySprint AI is also governed by our <Link href="/privacy" className="text-primary-600 hover:text-primary-800 underline">Privacy Policy</Link>, which defines our data collection practices and strict adherence to global privacy laws regarding your academic and account data.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">6. Limitation of Liability</h2>
            <p>
              StudySprint AI provides its productivity and AI-planning tools on an "as is" and "as available" basis. While we strive for accuracy, we cannot guarantee that the AI-generated study schedules or reminders will be flawless. To the fullest extent permitted by law, StudySprint AI and its developers shall not be liable for any indirect, incidental, or consequential damages resulting from lost academic performance, missed deadlines, or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">7. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or require clarification regarding these Terms of Service, please reach out to us at:
            </p>
            <div className="bg-primary-50 border border-primary-100 p-6 rounded-lg">
              <p className="font-semibold text-primary-900">StudySprint AI Legal</p>
              <p className="text-primary-800 mt-2">Email: <a href="mailto:legal@studysprint.ai" className="hover:underline">legal@studysprint.ai</a></p>
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
