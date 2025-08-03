'use client';

import React, { useState } from 'react';
import { BookOpen, FileText, Download, ChevronDown, ChevronRight } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  code: string;
  marks: number;
  topics: string[];
  isExpanded: boolean;
}

const SyllabusPage: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: '1',
      name: 'English Essay',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'Essay writing techniques and styles',
        'Current affairs and contemporary issues',
        'Social, economic, and political topics',
        'Literary and philosophical themes'
      ],
      isExpanded: false
    },
    {
      id: '2',
      name: 'English (Precis & Composition)',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'Precis writing',
        'Composition and grammar',
        'Vocabulary and idioms',
        'Translation and comprehension'
      ],
      isExpanded: false
    },
    {
      id: '3',
      name: 'General Science & Ability',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'Basic mathematics and statistics',
        'General science concepts',
        'Logical reasoning',
        'Problem-solving techniques'
      ],
      isExpanded: false
    },
    {
      id: '4',
      name: 'Current Affairs',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'National and international events',
        'Economic and political developments',
        'Social issues and reforms',
        'Environmental and technological advances'
      ],
      isExpanded: false
    },
    {
      id: '5',
      name: 'Pakistan Affairs',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'Pakistan history and independence',
        'Geography and natural resources',
        'Political system and constitution',
        'Economic development and challenges'
      ],
      isExpanded: false
    },
    {
      id: '6',
      name: 'Islamic Studies',
      code: 'CE-2024',
      marks: 100,
      topics: [
        'Islamic history and civilization',
        'Islamic law and jurisprudence',
        'Islamic philosophy and ethics',
        'Contemporary Islamic issues'
      ],
      isExpanded: false
    }
  ]);

  const toggleSubject = (id: string) => {
    setSubjects(subjects.map(subject => 
      subject.id === id 
        ? { ...subject, isExpanded: !subject.isExpanded }
        : subject
    ));
  };

  const totalMarks = subjects.reduce((sum, subject) => sum + subject.marks, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CSS 2024 Syllabus</h1>
          <p className="text-xl text-gray-600">Complete syllabus and subject details for CSS 2024 examination</p>
        </div>

        {/* Overview Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Examination Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{subjects.length}</div>
              <div className="text-gray-600">Total Subjects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">{totalMarks}</div>
              <div className="text-gray-600">Total Marks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">600</div>
              <div className="text-gray-600">Passing Marks</div>
            </div>
          </div>
        </div>

        {/* Subjects List */}
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleSubject(subject.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{subject.name}</h3>
                      <p className="text-gray-600">Code: {subject.code} | Marks: {subject.marks}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {subject.marks} Marks
                    </span>
                    {subject.isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
              
              {subject.isExpanded && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <h4 className="font-semibold text-gray-900 mb-4">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {subject.topics.map((topic, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-2">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Examination Pattern</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Written examination consists of 6 papers</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Each paper carries 100 marks</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Total duration: 3 hours per paper</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Minimum 40% marks required in each paper</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>All papers are compulsory</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>English is the medium of examination</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Negative marking is not applicable</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Interview carries 300 marks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Download Complete Syllabus</h2>
            <p className="text-blue-100 mb-6">Get the complete CSS 2024 syllabus in PDF format</p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage; 