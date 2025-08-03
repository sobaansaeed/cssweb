'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Clock, FileText, Eye, Download } from 'lucide-react';

interface Newspaper {
  id: string;
  title: string;
  date: string;
  fileUrl: string;
}

interface Editorial {
  id: string;
  title: string;
  authorName: string;
  newspaper: string;
  date: string;
  fileUrl: string;
}

const NewspapersPage: React.FC = () => {
  const [newspapers, setNewspapers] = useState<Newspaper[]>([]);
  const [editorials, setEditorials] = useState<Editorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPDF, setSelectedPDF] = useState<Newspaper | Editorial | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNewspapers([
        {
          id: '1',
          title: 'Dawn - January 15, 2024',
          date: '2024-01-15',
          fileUrl: '/sample-pdf.pdf'
        },
        {
          id: '2',
          title: 'The News - January 15, 2024',
          date: '2024-01-15',
          fileUrl: '/sample-pdf.pdf'
        }
      ]);
      setEditorials([
        {
          id: '1',
          title: 'Economic Challenges and Opportunities',
          authorName: 'Dr. Ahmed Khan',
          newspaper: 'Dawn',
          date: '2024-01-15',
          fileUrl: '/sample-pdf.pdf'
        },
        {
          id: '2',
          title: 'Foreign Policy in Changing Times',
          authorName: 'Prof. Sarah Ahmed',
          newspaper: 'The News',
          date: '2024-01-14',
          fileUrl: '/sample-pdf.pdf'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewPDF = (item: Newspaper | Editorial) => {
    setSelectedPDF(item);
  };

  const handleClosePDF = () => {
    setSelectedPDF(null);
  };

  const handleDownloadPDF = (item: Newspaper | Editorial) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = item.fileUrl;
    link.download = `${item.title}.pdf`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading newspapers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Daily Newspapers</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest news and editorials</p>
        </div>

        {/* Newspapers Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Today&apos;s Newspapers</h2>
          
          {newspapers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newspapers.map((newspaper) => (
                <div key={newspaper.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <span className="text-sm text-gray-500">{newspaper.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{newspaper.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewPDF(newspaper)}
                      className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownloadPDF(newspaper)}
                      className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No newspaper PDFs are available at the moment.</p>
            </div>
          )}
        </div>

        {/* Editorials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Editorials</h2>
          
          {editorials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {editorials.map((editorial) => (
                <div key={editorial.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {editorial.newspaper}
                    </span>
                    <span className="text-sm text-gray-500">{editorial.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{editorial.title}</h3>
                  <p className="text-gray-600 mb-4">By {editorial.authorName}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewPDF(editorial)}
                      className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownloadPDF(editorial)}
                      className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No editorials are available at the moment.</p>
            </div>
          )}
        </div>

        {/* Newspaper Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Dawn</h3>
            <p className="text-sm text-gray-600 mb-4">Pakistan&apos;s most widely circulated English newspaper</p>
            <a
              href="https://www.dawn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">The News</h3>
            <p className="text-sm text-gray-600 mb-4">Leading English daily with comprehensive coverage</p>
            <a
              href="https://www.thenews.com.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Express Tribune</h3>
            <p className="text-sm text-gray-600 mb-4">Pakistan&apos;s premier English newspaper</p>
            <a
              href="https://tribune.com.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Business Recorder</h3>
            <p className="text-sm text-gray-600 mb-4">Leading business and financial daily</p>
            <a
              href="https://www.brecorder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit Website
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{selectedPDF.title}</h3>
              <button
                onClick={handleClosePDF}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">PDF viewer would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">File: {selectedPDF.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewspapersPage; 