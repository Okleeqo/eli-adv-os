import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Repeat } from 'lucide-react';

const CustomersAndSales: React.FC = () => {
  const [activeTab, setActiveTab] = useState('metrics');

  const metrics = [
    {
      title: 'Existing Customers',
      value: '850',
      change: '+12',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Retention Rate',
      value: '92%',
      change: '+2.5%',
      icon: Repeat,
      color: 'bg-green-500'
    },
    {
      title: 'Avg Transaction Value',
      value: '$1,250',
      change: '+$125',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Monthly Growth Rate',
      value: '8.5%',
      change: '+1.2%',
      icon: TrendingUp,
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
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
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

      {/* Customer Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Acquisition Trend</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Lifetime Value</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Segments</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Premium Segment (25%)</h4>
            <p className="text-blue-700 mt-1">High-value customers with average transaction value greater than $2,000</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Regular Segment (55%)</h4>
            <p className="text-green-700 mt-1">Core customer base with stable purchasing patterns</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-900">New Customers (20%)</h4>
            <p className="text-orange-700 mt-1">Recently acquired customers requiring nurturing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersAndSales;