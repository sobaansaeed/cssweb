'use client';

import React, { useState } from 'react';
import { Download, BookOpen, Star, Search, Tag, FileText, Clock, Users } from 'lucide-react';

interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  category: string;
  subject: string;
  downloads: number;
  rating: number;
  type: 'pdf' | 'doc' | 'video' | 'audio';
  lastUpdated: string;
}

const StudyMaterialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const studyMaterials: StudyMaterial[] = [
    {
      id: '1',
      title: 'Complete CSS Syllabus 2024',
      description: 'Comprehensive syllabus covering all subjects for CSS 2024 examination',
      fileSize: '2.5 MB',
      category: 'Syllabus',
      subject: 'General Studies',
      downloads: 2150,
      rating: 4.9,
      type: 'pdf',
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      title: 'Pakistan Affairs Notes',
      description: 'Detailed notes on Pakistan Affairs covering history, geography, and current issues',
      fileSize: '8.2 MB',
      category: 'Notes',
      subject: 'Pakistan Affairs',
      downloads: 1890,
      rating: 4.7,
      type: 'pdf',
      lastUpdated: '2024-01-12'
    },
    {
      id: '3',
      title: 'Essay Writing Guide',
      description: 'Complete guide for essay writing with examples and techniques',
      fileSize: '5.1 MB',
      category: 'Guide',
      subject: 'English',
      downloads: 1456,
      rating: 4.8,
      type: 'pdf',
      lastUpdated: '2024-01-10'
    },
    {
      id: '4',
      title: 'Current Affairs Analysis',
      description: 'Monthly current affairs analysis with important events and their relevance',
      fileSize: '3.8 MB',
      category: 'Analysis',
      subject: 'Current Affairs',
      downloads: 1234,
      rating: 4.6,
      type: 'pdf',
      lastUpdated: '2024-01-08'
    },
    {
      id: '5',
      title: 'Islamic Studies Notes',
      description: 'Comprehensive notes on Islamic Studies for CSS examination',
      fileSize: '6.7 MB',
      category: 'Notes',
      subject: 'Islamic Studies',
      downloads: 987,
      rating: 4.5,
      type: 'pdf',
      lastUpdated: '2024-01-05'
    },
    {
      id: '6',
      title: 'Interview Preparation Guide',
      description: 'Video guide for CSS interview preparation with tips and strategies',
      fileSize: '45.2 MB',
      category: 'Video',
      subject: 'Interview',
      downloads: 756,
      rating: 4.9,
      type: 'video',
      lastUpdated: '2024-01-03'
    }
  ];

  const categories = ['all', 'Syllabus', 'Notes', 'Guide', 'Analysis', 'Video'];
  const subjects = ['all', 'General Studies', 'Pakistan Affairs', 'English', 'Current Affairs', 'Islamic Studies', 'Interview'];

  const filteredMaterials = studyMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    const matchesSubject = selectedSubject === 'all' || material.subject === selectedSubject;
    
    return matchesSearch && matchesCategory && matchesSubject;
  });

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-5 w-5" />;
      case 'doc': return <FileText className="h-5 w-5" />;
      case 'video': return <BookOpen className="h-5 w-5" />;
      case 'audio': return <Users className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Syllabus': return 'text-blue-600 bg-blue-100';
      case 'Notes': return 'text-green-600 bg-green-100';
      case 'Guide': return 'text-purple-600 bg-purple-100';
      case 'Analysis': return 'text-orange-600 bg-orange-100';
      case 'Video': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Materials</h1>
          <p className="text-xl text-gray-600">Comprehensive study materials to help you prepare for CSS exam</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search study materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div className="lg:w-48">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div key={material.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${getLevelColor(material.category)}`}>
                    {getFileTypeIcon(material.type)}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{material.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{material.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{material.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {material.subject}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {material.lastUpdated}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="h-4 w-4 mr-1" />
                    {material.downloads} downloads
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No materials found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters to see more results.</p>
          </div>
        )}

        {/* Stats Section */}
        {filteredMaterials.length > 0 && (
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Study Materials Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{filteredMaterials.length}</div>
                <div className="text-gray-600">Total Materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round(filteredMaterials.reduce((acc, m) => acc + m.rating, 0) / filteredMaterials.length * 10) / 10}
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {filteredMaterials.reduce((acc, m) => acc + m.downloads, 0).toLocaleString()}
                </div>
                <div className="text-gray-600">Total Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {(filteredMaterials.reduce((acc, m) => acc + parseFloat(m.fileSize), 0)).toFixed(1)} MB
                </div>
                <div className="text-gray-600">Total Size</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialsPage; 