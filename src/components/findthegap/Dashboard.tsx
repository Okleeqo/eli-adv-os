import React from 'react';
import { DollarSign, TrendingUp, Clock, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$125,000',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-blue-500'
    },
    {
      title: 'Net Profit Margin',
      value: '23.4%',
      change: '+3.2%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Cash Conversion Cycle',
      value: '45 days',
      change: '-5 days',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Active Customers',
      value: '1,234',
      change: '+56',
      icon: Users,
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Profit Analysis</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Improve Cash Conversion Cycle</h4>
            <p className="text-blue-700 mt-1">Consider negotiating better payment terms with suppliers to optimize working capital.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Revenue Growth Opportunity</h4>
            <p className="text-green-700 mt-1">Analysis suggests potential for 15% revenue increase through market expansion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;