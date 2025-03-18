"use client";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-blue-950 from-blue-50 to-white flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/strive logo white on transparent.png"
              alt="StriveApp Logo"
              width={150}
              height={40}
              priority
              className="hidden dark:block"
            />
            <Image
              src="/Striveapp Logo.png"
              alt="StriveApp Logo"
              width={150}
              height={40}
              priority
              className="block dark:hidden"
            />
          </Link>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Sign in to continue your growth journey</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-DEFAULT dark:focus:ring-blue-500 focus:border-primary-DEFAULT dark:focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-DEFAULT dark:focus:ring-blue-500 focus:border-primary-DEFAULT dark:focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-DEFAULT dark:text-blue-600 focus:ring-primary-light dark:focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-primary-DEFAULT dark:text-blue-400 hover:text-primary-light dark:hover:text-blue-300">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary-DEFAULT dark:bg-blue-600 hover:bg-primary-light dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-DEFAULT dark:focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-primary-DEFAULT dark:text-blue-400 hover:text-primary-light dark:hover:text-blue-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} StriveApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
