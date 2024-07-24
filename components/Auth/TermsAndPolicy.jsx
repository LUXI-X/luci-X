import React, { useState } from 'react';

const TermsAndPolicy = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  return (
    <div id='TermsAndPolicy' className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Lucy X - Terms of Service and Privacy Policy</h1>
      
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to Lucy X, an IT company owned by Chandrapal Singh and Tejpal Singh (CEO). 
          These Terms of Service ("Terms") and Privacy Policy govern your use of our services, 
          including frontend development, backend development, and database management. 
          By creating an account with Lucy X, you agree to these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Account Creation and Responsibilities</h2>
        <ul className="list-disc pl-5">
          <li>You must be at least 18 years old to create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree to provide accurate, current, and complete information during the registration process.</li>
          <li>You are solely responsible for all activities that occur under your account.</li>
        </ul>
      </section>

      {/* Add more sections here for the rest of the terms and policy */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at [contact email].
        </p>
      </section>

      <div className="mt-8">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={accepted}
            onChange={handleAcceptance}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">
            I have read and agree to the Terms of Service and Privacy Policy
          </span>
        </label>
      </div>

      <button 
        className={`mt-4 px-4 py-2 rounded ${
          accepted 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!accepted}
      >
        Create Account
      </button>
    </div>
  );
};

export default TermsAndPolicy;