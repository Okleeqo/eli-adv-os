import React from 'react';
import { TrendingUp, DollarSign, Users, ShoppingCart } from 'lucide-react';

const ProfitOptimization: React.FC = () => {
  const strategies = [
    {
      title: 'Revenue Growth',
      value: '+15%',
      target: '+20%',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Cost Reduction',
      value: '-8%',
      target: '-10%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Customer Retention',
      value: '85%',
      target: '90%',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Average Order Value',
      value: '$250',
      target: '$275',
      icon: ShoppingCart,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Strategy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strategies.map((strategy, index) => {
          const Icon = strategy.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${strategy.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Target: {strategy.target}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{strategy.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{strategy.title}</p>
            </div>
          );
        })}
      </div>

      {/* Optimization Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Profit Drivers Analysis</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Optimization Impact</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Actions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Pricing Strategy</h4>
            <p className="text-blue-700 mt-1">Implement value-based pricing to increase margins by 5%</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Cost Management</h4>
            <p className="text-green-700 mt-1">Optimize supplier contracts to reduce COGS by 3%</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900">Customer Experience</h4>
            <p className="text-purple-700 mt-1">Enhance customer service to improve retention rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitOptimization;