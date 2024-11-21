import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OfferLabSidebar from '../components/offerlab/OfferLabSidebar';
import OfferLabHeader from '../components/offerlab/OfferLabHeader';
import Dashboard from '../components/offerlab/Dashboard';
import ActionPlanPanel from '../components/offerlab/ActionPlanPanel';
import WorkflowPanel from '../components/offerlab/WorkflowPanel';
import DeliveryPanel from '../components/offerlab/DeliveryPanel';
import FrameworksPanel from '../components/offerlab/FrameworksPanel';
import StrategyForge from '../components/offerlab/strategyforge/StrategyForge';

const OfferLab: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'strategy-forge':
        return <StrategyForge />;
      case 'action-plan':
        return <ActionPlanPanel />;
      case 'workflows':
        return <WorkflowPanel />;
      case 'delivery':
        return <DeliveryPanel />;
      case 'frameworks':
        return <FrameworksPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <OfferLabSidebar 
        isOpen={isSidebarOpen}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <OfferLabHeader 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onBack={() => navigate('/offer-creation')}
        />
        
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default OfferLab;