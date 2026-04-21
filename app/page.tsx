import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            <span className="text-xl font-bold text-blue-700">
              StudySprint AI
            </span>

            <div className="flex space-x-6">
              <Link href="/" className="text-blue-900 hover:text-blue-600 font-medium">
                Home
              </Link>

              <Link href="/about" className="text-blue-900 hover:text-blue-600 font-medium">
                About
              </Link>

              <Link href="/features" className="text-blue-900 hover:text-blue-600 font-medium">
                Features
              </Link>

              <Link href="/contact" className="text-blue-900 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 bg-blue-50">
        <div className="text-center max-w-3xl">

          <h1 className="text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
            Study Smarter with <span className="text-blue-600">StudySprint AI</span>
          </h1>

          <p className="text-xl text-blue-800 mb-4 font-medium">
            AI-powered tools to help students stay organized and succeed
          </p>
          
          <p className="text-lg text-blue-700 mb-10">
            StudySprint AI helps students manage deadlines, build study schedules, and improve productivity using simple, intuitive artificial intelligence.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/features"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition-colors"
            >
              Explore Features
            </Link>

            <Link
              href="/auth/signup"
              className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 shadow-sm transition-colors"
            >
              Get Started
            </Link>
          </div>

        </div>
      </section>


      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
            Platform Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <FeatureCard
              icon="📅"
              title="AI Study Planner"
              description="Automatically generate optimized study schedules based on your courses and deadlines."
            />

            <FeatureCard
              icon="⏰"
              title="Assignment Reminders"
              description="Never miss a deadline with smart reminders and task tracking."
            />

            <FeatureCard
              icon="🤖"
              title="AI Study Assistant"
              description="Ask questions, review concepts, and get personalized learning support."
            />

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-blue-50 py-10 border-t border-blue-100">
        <div className="text-center text-blue-800">

          <p className="font-bold text-blue-900">StudySprint AI</p>

          <p className="text-sm mt-2">
            AI-powered productivity tools for college and university students
          </p>

          <div className="mt-4 flex justify-center">
            <Link href="/privacy" className="text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors font-medium">
              Privacy Policy
            </Link>
          </div>

          <p className="text-sm mt-4 text-blue-600">
            © 2026 StudySprint AI
          </p>

        </div>
      </footer>

    </main>
  );
}


function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-blue-100 hover:-translate-y-1">

      <div className="text-4xl mb-6">{icon}</div>

      <h3 className="text-xl font-bold text-blue-900 mb-3">
        {title}
      </h3>

      <p className="text-blue-800 leading-relaxed">
        {description}
      </p>

    </div>
  );
}