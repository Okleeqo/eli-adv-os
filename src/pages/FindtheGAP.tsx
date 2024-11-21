import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Clock, 
  TrendingUp, 
  Layers,
  FileBarChart,
  Settings,
  Menu,
  X,
  DollarSign,
  PieChart,
  ArrowUpRight
} from 'lucide-react';
import Dashboard from '../components/findthegap/Dashboard';
import FinancialStatements from '../components/findthegap/FinancialStatements';
import CustomersAndSales from '../components/findthegap/CustomersAndSales';
import CashConversionCycle from '../components/findthegap/CashConversionCycle';
import ProfitOptimization from '../components/findthegap/ProfitOptimization';
import Scenarios from '../components/findthegap/Scenarios';
import Reports from '../components/findthegap/Reports';
import AppSettings from '../components/findthegap/AppSettings';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'financial-statements', label: 'Financial Statements', icon: FileText },
  { id: 'customers-sales', label: 'Customers & Sales', icon: Users },
  { id: 'cash-conversion', label: 'Cash Conversion Cycle', icon: Clock },
  { id: 'profit-optimization', label: 'Profit Optimization', icon: TrendingUp },
  { id: 'scenarios', label: 'Scenarios', icon: Layers },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings }
];

const FindtheGAP: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'financial-statements':
        return <FinancialStatements />;
      case 'customers-sales':
        return <CustomersAndSales />;
      case 'cash-conversion':
        return <CashConversionCycle />;
      case 'profit-optimization':
        return <ProfitOptimization />;
      case 'scenarios':
        return <Scenarios />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <AppSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${
        isSidebarOpen ? 'w-64' : 'w-20'
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b flex items-center justify-between">
          {isSidebarOpen ? (
            <h1 className="text-xl font-bold text-blue-900">FindtheGAP</h1>
          ) : (
            <span className="text-xl font-bold text-blue-900">FG</span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-1 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                  activeSection === item.id ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <Icon size={20} />
                {isSidebarOpen && <span className="ml-3">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {menuItems.find(item => item.id === activeSection)?.label}
              </h2>
            </div>
            <button
              onClick={() => navigate('/tools-apps')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowUpRight size={20} className="mr-1" />
              {isSidebarOpen && <span>Exit to Tools</span>}
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 overflow-auto" style={{ height: 'calc(100vh - 73px)' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default FindtheGAP;