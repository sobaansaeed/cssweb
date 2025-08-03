'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Calendar, Users, Star, Globe, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CSS Prep Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your comprehensive platform for CSS exam preparation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/newspapers"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Read News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for CSS Success
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive resources, study materials, and tools to help you excel in your CSS exam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Materials</h3>
              <p className="text-gray-600">Comprehensive notes, guides, and reference materials</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Past Papers</h3>
              <p className="text-gray-600">Previous years&apos; papers with detailed solutions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Newspapers</h3>
              <p className="text-gray-600">Daily newspapers and editorials for current affairs</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-600">Important dates and exam schedule tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Past Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your CSS Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are preparing for CSS exams with our comprehensive platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/newspapers"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Read Today&apos;s News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 