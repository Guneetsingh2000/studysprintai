export default function ContactPage() {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
  
          <p className="text-lg text-gray-700 mb-4">
            Have questions about StudySprint AI? We would love to hear from you.
          </p>
  
          <div className="space-y-3 text-gray-700 text-lg">
            <p><strong>Email:</strong> support@studysprintai.com</p>
            <p><strong>Phone:</strong> (416) 555-2026</p>
            <p><strong>Location:</strong> Brampton, Ontario, Canada</p>
          </div>
  
          <div className="mt-8">
            <p className="text-gray-600">
              For support, business inquiries, or partnership opportunities, please contact us using the information above.
            </p>
          </div>
        </div>
      </main>
    );
  }