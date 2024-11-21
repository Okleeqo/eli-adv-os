import React from 'react';
import { LayoutDashboard, Workflow, Bell, Settings, Target, Hammer } from 'lucide-react';

interface OfferLabSidebarProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const OfferLabSidebar: React.FC<OfferLabSidebarProps> = ({
  isOpen,
  activeSection,
  onSectionChange
}) => {
  const sections = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'strategy-forge', name: 'Strategy Forge', icon: Hammer },
    { id: 'action-plan', name: 'Action Plan', icon: Target },
    { id: 'workflows', name: 'Workflows', icon: Workflow },
    { id: 'delivery', name: 'Delivery', icon: Bell },
    { id: 'frameworks', name: 'Frameworks', icon: Settings }
  ];

  return (
    <aside className={`${
      isOpen ? 'w-64' : 'w-20'
    } bg-white border-r transition-all duration-300`}>
      <div className="p-4">
        <div className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {isOpen && <span className="ml-3">{section.name}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default OfferLabSidebar;