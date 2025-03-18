import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/strive logo white on transparent.png"
            alt="StriveApp Logo"
            width={150}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-md text-blue-300 hover:text-blue-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Grow Your Habits,{" "}
              <span className="text-blue-400">Grow Your Success</span>
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              StriveApp helps students develop self-regulation and organizational
              skills through gamified habit and task management. Track your progress, earn XP, and
              watch yourself grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="px-6 py-3 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-900/30 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Replace with your own image */}
            <div className="absolute inset-0 bg-blue-900/30 rounded-lg flex items-center justify-center">
              <div className="text-blue-300 text-xl font-semibold">
                Plant Growth Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-950/50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Task Management
              </h3>
              <p className="text-blue-200">
                Create, organize, and complete tasks with due dates, priorities,
                and categories. Track homework and personal tasks in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-950/50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Habit Tracking
              </h3>
              <p className="text-blue-200">
                Build consistent habits with daily check-ins, streak tracking,
                and performance metrics to help you stay on course.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-950/50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Gamification
              </h3>
              <p className="text-blue-200">
                Earn XP for completing tasks and maintaining habits. Progress
                through 10 plant-based tiers from Seed to World Tree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/strive logo white on transparent.png"
            alt="StriveApp Logo"
            width={120}
            height={40}
            className="mx-auto mb-6"
          />
          <p className="text-blue-300 mb-6">
            Helping students build better habits, one task at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-300"
            >
              About
            </Link>
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-300"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-300"
            >
              Terms
            </Link>
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-300"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-blue-500">
            &copy; {new Date().getFullYear()} StriveApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
