import React from 'react';

const TextInput = ({
  value,
  onChange,
  placeholder = 'Paste your AI-generated text here...',
  maxLength = 5000,
  className = '',
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const characterCount = value.length;
  const characterLimit = maxLength;

  return (
    <div className={`w-full ${className}`}>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={10}
        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
        <div>
          <span
            className={
              characterCount > characterLimit * 0.9 ? 'text-red-500' : ''
            }
          >
            {characterCount}
          </span>
          <span> / {characterLimit} characters</span>
        </div>
        {value && (
          <button
            onClick={() => onChange('')}
            className="text hover:text-blue-800"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;