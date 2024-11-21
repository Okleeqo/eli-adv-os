import React, { useState } from 'react';
import { FileText, DollarSign, TrendingUp, Upload, Download, Save, RefreshCw, X } from 'lucide-react';

const FinancialStatements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [showInputModal, setShowInputModal] = useState(false);
  const [formData, setFormData] = useState({
    // Income Statement Data
    revenue: '',
    costOfGoodsSold: '',
    operatingExpenses: '',
    otherIncome: '',
    otherExpenses: '',
    taxRate: '',

    // Balance Sheet Data
    cashAndEquivalents: '',
    accountsReceivable: '',
    inventory: '',
    prepaidExpenses: '',
    fixedAssets: '',
    accountsPayable: '',
    shortTermDebt: '',
    longTermDebt: '',
    equity: '',

    // Cash Flow Data
    receivableDays: '',
    inventoryDays: '',
    payableDays: '',
    
    // Additional Metrics
    averageTransactionValue: '',
    customerCount: '',
    retentionRate: '',
    acquisitionCost: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save the data to your state management solution
    console.log('Saving data:', formData);
    setShowInputModal(false);
  };

  const handleImport = () => {
    // Implement Excel/CSV import functionality
  };

  const handleExport = () => {
    // Implement data export functionality
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('income')}
              className={`px-4 py-2 rounded-lg flex items-center ${
                activeTab === 'income' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Income Statement
            </button>
            <button
              onClick={() => setActiveTab('balance')}
              className={`px-4 py-2 rounded-lg flex items-center ${
                activeTab === 'balance' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Balance Sheet
            </button>
            <button
              onClick={() => setActiveTab('cashflow')}
              className={`px-4 py-2 rounded-lg flex items-center ${
                activeTab === 'cashflow' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Cash Flow
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowInputModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              Input Data
            </button>
            <button
              onClick={handleImport}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              Import
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Data Input Modal */}
      {showInputModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Financial Data Input</h2>
              <button
                onClick={() => setShowInputModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Income Statement Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Statement</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Revenue</label>
                      <input
                        type="number"
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cost of Goods Sold</label>
                      <input
                        type="number"
                        name="costOfGoodsSold"
                        value={formData.costOfGoodsSold}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Operating Expenses</label>
                      <input
                        type="number"
                        name="operatingExpenses"
                        value={formData.operatingExpenses}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Balance Sheet Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Balance Sheet</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Cash & Equivalents</label>
                      <input
                        type="number"
                        name="cashAndEquivalents"
                        value={formData.cashAndEquivalents}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Accounts Receivable</label>
                      <input
                        type="number"
                        name="accountsReceivable"
                        value={formData.accountsReceivable}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Inventory</label>
                      <input
                        type="number"
                        name="inventory"
                        value={formData.inventory}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Cash Flow Metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Cash Flow Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Days Sales Outstanding</label>
                      <input
                        type="number"
                        name="receivableDays"
                        value={formData.receivableDays}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Days Inventory Outstanding</label>
                      <input
                        type="number"
                        name="inventoryDays"
                        value={formData.inventoryDays}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Days Payable Outstanding</label>
                      <input
                        type="number"
                        name="payableDays"
                        value={formData.payableDays}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Customer Metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Average Transaction Value</label>
                      <input
                        type="number"
                        name="averageTransactionValue"
                        value={formData.averageTransactionValue}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Customer Count</label>
                      <input
                        type="number"
                        name="customerCount"
                        value={formData.customerCount}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Retention Rate (%)</label>
                      <input
                        type="number"
                        name="retentionRate"
                        value={formData.retentionRate}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setShowInputModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statement Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'income' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Income Statement</h3>
            {/* Income statement content */}
          </div>
        )}
        
        {activeTab === 'balance' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Balance Sheet</h3>
            {/* Balance sheet content */}
          </div>
        )}
        
        {activeTab === 'cashflow' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Cash Flow Statement</h3>
            {/* Cash flow statement content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialStatements;