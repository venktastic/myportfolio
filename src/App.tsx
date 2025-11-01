import React, { useState } from 'react';
import HowIWork from './components/HowIWork';

const App: React.FC = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      {showComponent && (
        <HowIWork 
          profileImage="/attached_assets/profile-photo_1761884631575.jpg"
          onClose={() => setShowComponent(false)}
        />
      )}
      
      {!showComponent && (
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Component Demo Complete</h1>
          <button 
            onClick={() => setShowComponent(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Show Component Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
