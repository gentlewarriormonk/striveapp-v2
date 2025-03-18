import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image 
            src="/Strive full colour with padding.png" // Use the actual filename of your logo
            alt="StriveApp Logo"
            width={150} // Adjust based on your logo's dimensions
            height={40} // Adjust based on your logo's dimensions
            priority
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 rounded-md text-green-700 hover:text-green-800">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Habits, <span className="text-green-600">Grow Your Success</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              StriveApp helps students develop self-regulation and organizational skills through 
              gamified habit and task management. Track your progress, earn XP, and watch yourself grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-center">
                Get Started
              </Link>
              <Link href="#features" className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50 text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Replace with your own image */}
            <div className="absolute inset-0 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="text-green-700 text-xl font-semibold">Plant Growth Illustration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management</h3>
              <p className="text-gray-700">
                Create, organize, and complete tasks with due dates, priorities, and categories. Track homework and personal tasks in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Habit Tracking</h3>
              <p className="text-gray-700">
                Build consistent habits with daily check-ins, streak tracking, and performance metrics to help you stay on course.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamification</h3>
              <p className="text-gray-700">
                Earn XP for completing tasks and maintaining habits. Progress through 10 plant-based tiers from Seed to World Tree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Teachers Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px]">
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="text-green-700 text-xl font-semibold">Teacher Dashboard Illustration</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Teachers</h2>
              <p className="text-lg text-gray-700 mb-6">
                Help your students develop essential life skills while maintaining their privacy. Monitor high-level progress data without seeing individual tasks.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create classes with unique join codes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>View class-level analytics and completion rates</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identify struggling students while respecting privacy</span>
                </li>
              </ul>
              <Link href="/register" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 inline-block">
                Join as a Teacher
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier System Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Growth Journey</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            As you complete tasks and maintain habits, you'll earn XP and progress through our 10-tier plant growth system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Seed", xp: "0 XP" },
              { name: "Seedling", xp: "350 XP" },
              { name: "Sapling", xp: "600 XP" },
              { name: "Evergreen", xp: "1,200 XP" },
              { name: "Young Tree", xp: "2,000 XP" },
              { name: "Mature Tree", xp: "3,500 XP" },
              { name: "Oak", xp: "5,500 XP" },
              { name: "Redwood", xp: "8,000 XP" },
              { name: "Ancient Forest", xp: "12,000 XP" },
              { name: "World Tree", xp: "20,000 XP" },
            ].map((tier, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-700 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-600">{tier.xp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Growing?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join StriveApp today and transform your habits, tasks, and academic success.
          </p>
          <Link href="/register" className="px-8 py-4 bg-white text-green-600 rounded-md hover:bg-green-50 inline-block font-semibold">
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">StriveApp</h3>
              <p>Helping students develop self-regulation and organizational skills through gamified habit and task management.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Task Management</a></li>
                <li><a href="#" className="hover:text-white">Habit Tracking</a></li>
                <li><a href="#" className="hover:text-white">Gamification</a></li>
                <li><a href="#" className="hover:text-white">Teacher Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="mb-2">Questions? Reach out to us.</p>
              <a href="mailto:support@striveapp.io" className="text-green-400 hover:text-green-300">support@striveapp.io</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} StriveApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
