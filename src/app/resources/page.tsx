'use client';

import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Video, Headphones, Star, Download, Clock } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'pdf' | 'video' | 'audio' | 'doc';
  rating: number;
  downloads: number;
  lastUpdated: string;
  fileSize: string;
}

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'CSS Complete Study Guide 2024',
      description: 'Comprehensive study material covering all CSS subjects with detailed explanations and examples.',
      category: 'General Studies',
      type: 'pdf',
      rating: 4.8,
      downloads: 1250,
      lastUpdated: '2024-01-15',
      fileSize: '15.2 MB'
    },
    {
      id: '2',
      title: 'Current Affairs Analysis',
      description: 'Monthly current affairs analysis with important events and their relevance to CSS exam.',
      category: 'Current Affairs',
      type: 'pdf',
      rating: 4.6,
      downloads: 890,
      lastUpdated: '2024-01-10',
      fileSize: '8.5 MB'
    },
    {
      id: '3',
      title: 'Essay Writing Techniques',
      description: 'Video tutorial on effective essay writing techniques for CSS exam.',
      category: 'Essay',
      type: 'video',
      rating: 4.9,
      downloads: 567,
      lastUpdated: '2024-01-08',
      fileSize: '45.2 MB'
    },
    {
      id: '4',
      title: 'Pakistan Affairs Notes',
      description: 'Comprehensive notes on Pakistan Affairs covering history, geography, and current issues.',
      category: 'Pakistan Affairs',
      type: 'pdf',
      rating: 4.7,
      downloads: 1023,
      lastUpdated: '2024-01-12',
      fileSize: '12.8 MB'
    }
  ];

  const categories = ['all', 'General Studies', 'Current Affairs', 'Essay', 'Pakistan Affairs', 'Islamic Studies', 'English'];
  const types = ['all', 'pdf', 'video', 'audio', 'doc'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'audio': return <Headphones className="h-5 w-5" />;
      case 'doc': return <FileText className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'text-red-600 bg-red-100';
      case 'video': return 'text-blue-600 bg-blue-100';
      case 'audio': return 'text-green-600 bg-green-100';
      case 'doc': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Resources</h1>
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
                  placeholder="Search resources..."
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

            {/* Type Filter */}
            <div className="lg:w-32">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {resource.lastUpdated}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="h-4 w-4 mr-1" />
                    {resource.downloads} downloads
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
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage; 