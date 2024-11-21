import React from 'react';
import { Layers, TrendingUp, TrendingDown, Activity } from 'lucide-react';

const Scenarios: React.FC = () => {
  const scenarios = [
    {
      title: 'Base Case',
      revenue: '$1.2M',
      profit: '$240K',
      margin: '20%',
      icon: Activity,
      color: 'bg-blue-500'
    },
    {
      title: 'Optimistic',
      revenue: '$1.5M',
      profit: '$375K',
      margin: '25%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Conservative',
      revenue: '$1.0M',
      profit: '$150K',
      margin: '15%',
      icon: TrendingDown,
      color: 'bg-orange-500'
    },
    {
      title: 'Aggressive Growth',
      revenue: '$2.0M',
      profit: '$400K',
      margin: '20%',
      icon: Layers,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${scenario.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {scenario.margin} margin
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{scenario.title}</h3>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500">Revenue: <span className="font-medium text-gray-900">{scenario.revenue}</span></p>
                <p className="text-sm text-gray-500">Profit: <span className="font-medium text-gray-900">{scenario.profit}</span></p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scenario Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Scenario Comparison</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sensitivity Analysis</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
      </div>

      {/* Key Assumptions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Assumptions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Market Growth</h4>
            <p className="text-blue-700 mt-1">Base: 5% | Optimistic: 8% | Conservative: 3%</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Cost Structure</h4>
            <p className="text-green-700 mt-1">Fixed costs increase by 3% annually across all scenarios</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900">Pricing Strategy</h4>
            <p className="text-purple-700 mt-1">Price increases: Base: 2% | Optimistic: 4% | Conservative: 1%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;