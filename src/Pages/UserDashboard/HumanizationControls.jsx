// src/Pages/UserDashboard/HumanizationControls.jsx
import React from 'react';
import { SlidersIcon } from 'lucide-react';

const HumanizationControls = ({
  level,
  setLevel,
  onHumanize,
  isDisabled = false,
  isLoading = false,
}) => {
  const getLevelDescription = () => {
    if (level === 'low') {
      return 'Basic humanization - Faster processing, higher AI detection risk';
    }
    if (level === 'medium') {
      return 'Balanced humanization - Good for most content needs';
    }
    if (level === 'high') {
      return 'Maximum humanization - Slowest processing, lowest detection risk';
    }
    return '';
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center mb-4">
        <SlidersIcon className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Humanization Level</h3>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <button
          onClick={() => setLevel('low')}
          className={`py-2 px-4 text-sm font-medium rounded-md ${level === 'low' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
          disabled={isDisabled}
        >
          Low (~60%)
        </button>
        <button
          onClick={() => setLevel('medium')}
          className={`py-2 px-4 text-sm font-medium rounded-md ${level === 'medium' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
          disabled={isDisabled}
        >
          Medium (~40%)
        </button>
        <button
          onClick={() => setLevel('high')}
          className={`py-2 px-4 text-sm font-medium rounded-md ${level === 'high' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
          disabled={isDisabled}
        >
          High (<20%)
        </button>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        {level === 'low' && (
          <span>Basic humanization - Faster processing, higher AI detection risk</span>
        )}
        {level === 'medium' && (
          <span>Balanced humanization - Good for most content needs</span>
        )}
        {level === 'high' && (
          <span>Maximum humanization - Slowest processing, lowest detection risk</span>
        )}
      </div>
      <button
        onClick={onHumanize}
        disabled={isDisabled || isLoading}
        className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Humanizing...
          </>
        ) : (
          'Humanize Text'
        )}
      </button>
    </div>
  );
};

export default HumanizationControls;