"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gradient-to-b from-gray-900 to-blue-950 text-white" : "bg-gradient-to-b from-white to-blue-50 text-gray-900"}`}>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src={theme === "dark" ? "/strive logo white on transparent.png" : "/Strive full colour with padding.png"}
            alt="StriveApp Logo"
            width={150}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className={`px-4 py-2 rounded-md ${theme === "dark" ? "text-blue-300 hover:text-blue-200" : "text-blue-700 hover:text-blue-800"}`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`px-4 py-2 rounded-md ${theme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Grow Your Habits,{" "}
              <span className={theme === "dark" ? "text-blue-400" : "text-blue-600"}>Grow Your Success</span>
            </h2>
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-blue-100" : "text-gray-700"}`}>
              StriveApp helps students develop self-regulation and organizational
              skills through gamified habit and task management. Track your
              progress, earn XP, and watch yourself grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className={`px-6 py-3 rounded-md text-center ${theme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className={`px-6 py-3 border rounded-md text-center ${
                  theme === "dark" 
                    ? "border-blue-500 text-blue-400 hover:bg-blue-900/30" 
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            {/* Replace with your own image */}
            <div className={`absolute inset-0 rounded-lg flex items-center justify-center ${
              theme === "dark" ? "bg-blue-900/30" : "bg-blue-100"
            }`}>
              <div className={`text-xl font-semibold ${
                theme === "dark" ? "text-blue-300" : "text-blue-700"
              }`}>
                Plant Growth Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-16 px-6 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-blue-950/50" : "bg-blue-50"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-100"
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
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
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Task Management
              </h3>
              <p className={theme === "dark" ? "text-blue-200" : "text-gray-700"}>
                Create, organize, and complete tasks with due dates, priorities,
                and categories. Track homework and personal tasks in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-blue-950/50" : "bg-blue-50"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-100"
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
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
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Habit Tracking
              </h3>
              <p className={theme === "dark" ? "text-blue-200" : "text-gray-700"}>
                Build consistent habits with daily check-ins, streak tracking,
                and performance metrics to help you stay on course.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-blue-950/50" : "bg-blue-50"}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === "dark" ? "bg-blue-900/50" : "bg-blue-100"
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
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
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Gamification
              </h3>
              <p className={theme === "dark" ? "text-blue-200" : "text-gray-700"}>
                Earn XP for completing tasks and maintaining habits. Progress
                through 10 plant-based tiers from Seed to World Tree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src={theme === "dark" ? "/strive logo white on transparent.png" : "/Strive full colour with padding.png"}
            alt="StriveApp Logo"
            width={120}
            height={40}
            className="mx-auto mb-6"
          />
          <p className={`mb-6 ${theme === "dark" ? "text-blue-300" : "text-blue-700"}`}>
            Helping students build better habits, one task at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link 
              href="#" 
              className={theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
            >
              About
            </Link>
            <Link 
              href="#" 
              className={theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className={theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
            >
              Terms
            </Link>
            <Link 
              href="#" 
              className={theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
            >
              Contact
            </Link>
          </div>
          <p className={`text-sm ${theme === "dark" ? "text-blue-500" : "text-blue-600"}`}>
            &copy; {new Date() .getFullYear()} StriveApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
