import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';

const OutputDisplay = ({ text, detectionScore, isLoading = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="w-full h-64 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500">Processing your text...</p>
        </div>
      </div>
    );
  }

  if (!text) {
    return (
      <div className="w-full h-64 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>Humanized text will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-700">Humanized Output</h3>
        {detectionScore !== null && (
          <span
            className={`text-sm font-medium ${detectionScore <= 20 ? 'text-green-600' : detectionScore <= 40 ? 'text-yellow-600' : 'text-red-600'}`}
          >
            {detectionScore}% AI Detectable
          </span>
        )}
      </div>
      <div className="relative">
        <div className="w-full h-64 overflow-y-auto border border-gray-300 rounded-md bg-white p-4">
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-md"
          title="Copy to clipboard"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-600" />
          ) : (
            <CopyIcon className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>
      <div className="flex justify-end mt-2">
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 mr-1.5 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4 mr-1.5 text-gray-600" />
              Copy to Clipboard
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default OutputDisplay;