import React from 'react'

import { Loader2, ChevronRight, ExternalLink } from 'lucide-react';

const WebsiteAnalysis = ({getStatusColor, getStatusIcon, selectedPage, setSelectedPage, pages, progress, setStep}) => {
  return (
    <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#001534]">Website Analysis</h2>
                <div className="text-sm text-gray-500">
                  {progress}% Complete
                </div>
              </div>

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#64ee81] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 border-2 border-gray-200 rounded-lg p-4 h-[400px] overflow-y-auto">
                  {pages.map(page => (
                    <div
                      key={page.id}
                      onClick={() => setSelectedPage(page)}
                      className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                        selectedPage?.id === page.id
                          ? 'bg-[#2872f9]/10 border-2 border-[#2872f9]'
                          : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium truncate">{page.url}</span>
                        <span className={`flex items-center gap-1 ${getStatusColor(page.status)}`}>
                          {getStatusIcon(page.status)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {page.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-3 border-2 border-gray-200 rounded-lg p-4 h-[400px] overflow-y-auto">
                  {selectedPage ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">{selectedPage.url}</h3>
                        <a href="#" className="text-[#2872f9] hover:underline flex items-center gap-1">
                          View Page <ExternalLink size={16} />
                        </a>
                      </div>
                      {selectedPage.chunks.length > 0 ? (
                        <div className="space-y-3">
                          {selectedPage.chunks.map((chunk, i) => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg">
                              {chunk}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-[300px] text-gray-500">
                          {selectedPage.status === 'pending' ? (
                            'Waiting to process this page...'
                          ) : selectedPage.status === 'processing' ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Processing page content...
                            </div>
                          ) : (
                            'No content chunks available'
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Select a page to view its content
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-[#64ee81] text-[#001534] font-semibold rounded-lg hover:bg-[#64ee81]/90 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {progress < 100 ? 'Continue Anyway' : 'Continue'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
  )
}

export default WebsiteAnalysis