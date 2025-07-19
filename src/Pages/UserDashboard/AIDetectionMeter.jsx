import React from 'react';

const AIDetectionMeter = ({ score, isLoading = false }) => {
  // Determine color based on score
  const getColor = () => {
    if (score <= 20) return 'bg-green-500';
    if (score <= 40) return 'bg-yellow-500';
    if (score <= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Determine label based on score
  const getLabel = () => {
    if (score <= 20) return 'Likely Human';
    if (score <= 40) return 'Possibly Human';
    if (score <= 60) return 'Possibly AI';
    return 'Likely AI';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          AI Detection Score
        </span>
        <span className="text-sm font-medium text-gray-700">
          {isLoading ? '...' : `${score}%`}
        </span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        {isLoading ? (
          <div className="h-full bg-gray-400 animate-pulse"></div>
        ) : (
          <div
            className={`h-full ${getColor()} transition-all duration-500 ease-in-out`}
            style={{
              width: `${score}%`,
            }}
          ></div>
        )}
      </div>
      <div className="mt-1 text-xs text-gray-500">
        {isLoading ? 'Analyzing...' : getLabel()}
      </div>
    </div>
  );
};

export default AIDetectionMeter;