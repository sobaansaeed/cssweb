'use client';

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  phase: string;
}

interface Reminder {
  id: string;
  title: string;
  description: string;
  type: 'urgent' | 'important' | 'info';
  timeRemaining?: string;
}

const TimelinePage: React.FC = () => {
  const [email, setEmail] = useState('');

  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      date: 'January 15, 2024',
      title: 'Application Deadline',
      description: 'Last date to submit CSS 2024 application forms',
      status: 'completed',
      phase: 'Application'
    },
    {
      id: '2',
      date: 'February 1, 2024',
      title: 'Written Exam Registration',
      description: 'Registration for written examination begins',
      status: 'current',
      phase: 'Registration'
    },
    {
      id: '3',
      date: 'March 15, 2024',
      title: 'Written Examination',
      description: 'CSS 2024 written examination starts',
      status: 'upcoming',
      phase: 'Written Exam'
    },
    {
      id: '4',
      date: 'May 1, 2024',
      title: 'Result Declaration',
      description: 'Written examination results will be announced',
      status: 'upcoming',
      phase: 'Results'
    },
    {
      id: '5',
      date: 'June 1, 2024',
      title: 'Interview Phase',
      description: 'Interview process for successful candidates',
      status: 'upcoming',
      phase: 'Interview'
    }
  ];

  const reminders: Reminder[] = [
    {
      id: '1',
      title: 'Application Deadline Approaching',
      description: 'Only 5 days left to submit your CSS 2024 application',
      type: 'urgent',
      timeRemaining: '5 days'
    },
    {
      id: '2',
      title: 'Study Material Update',
      description: 'New study materials have been added to the resources section',
      type: 'important',
      timeRemaining: '2 days'
    },
    {
      id: '3',
      title: 'Mock Test Available',
      description: 'Take the latest mock test to assess your preparation',
      type: 'info'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'current':
        return <Clock className="h-6 w-6 text-blue-600" />;
      case 'upcoming':
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
      default:
        return <Calendar className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'current':
        return 'border-blue-500';
      case 'upcoming':
        return 'border-gray-300';
      default:
        return 'border-gray-300';
    }
  };

  const getReminderIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'important':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'info':
        return <Calendar className="h-5 w-5 text-blue-600" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-600" />;
    }
  };

  const getReminderColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-50 border-red-200';
      case 'important':
        return 'bg-orange-50 border-orange-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    alert('Thank you for subscribing! You will receive updates about CSS 2024 timeline.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CSS 2024 Timeline</h1>
          <p className="text-xl text-gray-600">Important dates and milestones for CSS 2024 examination</p>
        </div>

        {/* Reminders Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reminders.map((reminder) => (
              <div key={reminder.id} className={`p-4 rounded-lg border ${getReminderColor(reminder.type)}`}>
                <div className="flex items-start space-x-3">
                  {getReminderIcon(reminder.type)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{reminder.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{reminder.description}</p>
                    {reminder.timeRemaining && (
                      <span className="text-xs font-medium text-gray-500">
                        {reminder.timeRemaining} remaining
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">CSS 2024 Complete Timeline</h2>
          
          <div className="space-y-8">
            {timelineEvents.map((event) => (
              <div key={event.id} className={`border-l-4 pl-8 pb-8 ${getStatusColor(event.status)}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getStatusIcon(event.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <span className="text-sm font-medium text-gray-500">{event.date}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium mt-3">
                      {event.phase}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">Get notified about important dates and updates for CSS 2024</p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exam Schedule</h3>
            <p className="text-gray-600 mb-4">View detailed examination schedule and timings</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View Schedule <ArrowRight className="h-4 w-4 inline ml-1" />
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Countdown</h3>
            <p className="text-gray-600 mb-4">Track time remaining until important deadlines</p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Start Countdown <ArrowRight className="h-4 w-4 inline ml-1" />
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <AlertCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
            <p className="text-gray-600 mb-4">Set up alerts for important dates and updates</p>
            <button className="text-orange-600 hover:text-orange-700 font-medium">
              Manage Alerts <ArrowRight className="h-4 w-4 inline ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage; 