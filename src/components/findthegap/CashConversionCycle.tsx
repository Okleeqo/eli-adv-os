import React from 'react';
import { Clock, ArrowRight, DollarSign, Package } from 'lucide-react';

const CashConversionCycle: React.FC = () => {
  const metrics = [
    {
      title: 'Days Sales Outstanding',
      value: '45 days',
      change: '-3 days',
      icon: Clock,
      color: 'bg-blue-500'
    },
    {
      title: 'Days Inventory Outstanding',
      value: '30 days',
      change: '-2 days',
      icon: Package,
      color: 'bg-green-500'
    },
    {
      title: 'Days Payable Outstanding',
      value: '35 days',
      change: '+5 days',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Cash Conversion Cycle',
      value: '40 days',
      change: '-10 days',
      icon: ArrowRight,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
                <span className={`text-sm font-medium ${
                  (metric.title === 'Days Payable Outstanding' && metric.change.startsWith('+')) ||
                  (metric.title !== 'Days Payable Outstanding' && metric.change.startsWith('-'))
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* CCC Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">CCC Trend Analysis</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Working Capital Impact</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
      </div>

      {/* Optimization Opportunities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Optimization Opportunities</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Receivables Management</h4>
            <p className="text-blue-700 mt-1">Implement early payment discounts to reduce DSO by 5 days</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Inventory Optimization</h4>
            <p className="text-green-700 mt-1">Adopt JIT inventory management to reduce holding costs</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900">Payables Strategy</h4>
            <p className="text-purple-700 mt-1">Negotiate extended payment terms with key suppliers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashConversionCycle;