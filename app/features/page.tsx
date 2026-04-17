export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          StudySprint AI Features
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">AI Study Planner</h2>
            <p className="text-gray-700">
              Generates customized study schedules based on your classes, priorities,
              and upcoming deadlines.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">Assignment Reminders</h2>
            <p className="text-gray-700">
              Sends reminders so students can stay on track and avoid missing important due dates.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">AI Study Assistant</h2>
            <p className="text-gray-700">
              Helps answer questions, explain topics, and support better understanding of class material.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-3">Progress Tracking</h2>
            <p className="text-gray-700">
              Lets students monitor completed tasks, study goals, and overall productivity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}