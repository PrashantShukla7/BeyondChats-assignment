import React from 'react'

import { Globe, Link2, FileText, Loader2, ChevronRight,} from 'lucide-react';

const OrganizationForm = ({orgData, setOrgData, isLoading, setStep, fetchMetaDescription}) => {
  return (
    <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#001534]">Organization Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative group">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2872f9]" size={20} />
                    <input
                      type="text"
                      value={orgData.name}
                      onChange={(e) => setOrgData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website URL
                  </label>
                  <div className="relative group">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2872f9]" size={20} />
                    <input
                      type="url"
                      value={orgData.website}
                      onChange={(e) => setOrgData(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full pl-12 pr-24 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none"
                      placeholder="https://example.com"
                      required
                    />
                    <button
                      onClick={() => fetchMetaDescription(orgData.website)}
                      disabled={!orgData.website || isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#2872f9] text-white rounded-md text-sm hover:bg-[#2872f9]/90 disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Fetch'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Description
                  </label>
                  <div className="relative group">
                    <FileText className="absolute left-3 top-3 text-gray-400 group-focus-within:text-[#2872f9]" size={20} />
                    <textarea
                      value={orgData.description}
                      onChange={(e) => setOrgData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2872f9] outline-none min-h-[100px]"
                      placeholder="Enter company description"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-[#64ee81] text-[#001534] font-semibold py-3 rounded-lg hover:bg-[#64ee81]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Continue
                <ChevronRight size={20} />
              </button>
            </div>
  )
}

export default OrganizationForm