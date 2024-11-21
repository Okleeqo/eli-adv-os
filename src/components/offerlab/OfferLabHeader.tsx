import React from 'react';
import { ArrowLeft, Menu } from 'lucide-react';

interface OfferLabHeaderProps {
  onToggleSidebar: () => void;
  onBack: () => void;
}

const OfferLabHeader: React.FC<OfferLabHeaderProps> = ({ onToggleSidebar, onBack }) => {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <button
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Offer Creation
          </button>
        </div>
        <h1 className="text-xl font-bold text-gray-800">OfferLab</h1>
      </div>
    </header>
  );
};

export default OfferLabHeader;