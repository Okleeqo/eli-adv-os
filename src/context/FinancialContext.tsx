import React, { createContext, useContext, useState } from 'react';

interface FinancialMetrics {
  revenue?: number;
  serviceRevenue?: number;
  cogs?: number;
  operatingExpenses?: number;
  marketingExpenses?: number;
  adminExpenses?: number;
  researchDevelopment?: number;
  interestExpense?: number;
  otherIncome?: number;
  otherExpenses?: number;
  depreciation?: number;
  amortization?: number;
  cash?: number;
  accountsReceivable?: number;
  inventory?: number;
  prepaidExpenses?: number;
  buildings?: number;
  equipment?: number;
  land?: number;
  accountsPayable?: number;
  shortTermDebt?: number;
  longTermDebt?: number;
  commonStock?: number;
  retainedEarnings?: number;
  taxRate?: number;
  assetPurchases?: number;
  assetSales?: number;
  debtRepayments?: number;
  newDebt?: number;
  accountsReceivableChange?: number;
  inventoryChange?: number;
  accountsPayableChange?: number;
  prepaidExpensesChange?: number;
  accruedLiabilitiesChange?: number;
}

interface FinancialData {
  actual: FinancialMetrics;
  lastPeriod: FinancialMetrics;
  budget: FinancialMetrics;
}

interface UploadedFile {
  file: File;
  name: string;
  size: number;
  lastModified: number;
}

interface FinancialContextType {
  financials: FinancialData;
  updateFinancials: (period: keyof FinancialData, updates: Partial<FinancialMetrics>) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectedPeriod: keyof FinancialData;
  setSelectedPeriod: (period: keyof FinancialData) => void;
  resetFinancials: (period: keyof FinancialData) => void;
  uploadedFiles: Record<keyof FinancialData, UploadedFile | null>;
  setUploadedFile: (period: keyof FinancialData, file: File | null) => void;
  aiReport: string | null;
  setAIReport: (report: string | null) => void;
  exportData: () => FinancialData;
  importData: (data: FinancialData) => void;
}

const FinancialContext = createContext<FinancialContextType | undefined>(undefined);

const defaultMetrics: FinancialMetrics = {
  revenue: 5000000,
  serviceRevenue: 1000000,
  cogs: 2000000,
  operatingExpenses: 800000,
  marketingExpenses: 400000,
  adminExpenses: 300000,
  researchDevelopment: 500000,
  interestExpense: 100000,
  otherIncome: 50000,
  otherExpenses: 30000,
  depreciation: 200000,
  amortization: 50000,
  cash: 1500000,
  accountsReceivable: 800000,
  inventory: 400000,
  prepaidExpenses: 100000,
  buildings: 2000000,
  equipment: 1000000,
  land: 500000,
  accountsPayable: 400000,
  shortTermDebt: 300000,
  longTermDebt: 1500000,
  commonStock: 2000000,
  retainedEarnings: 1500000,
  taxRate: 0.25,
  assetPurchases: 300000,
  assetSales: 50000,
  debtRepayments: 200000,
  newDebt: 500000,
  accountsReceivableChange: -50000,
  inventoryChange: -30000,
  accountsPayableChange: 20000,
  prepaidExpensesChange: -10000,
  accruedLiabilitiesChange: 15000
};

const defaultFinancials: FinancialData = {
  actual: { ...defaultMetrics },
  lastPeriod: { ...defaultMetrics },
  budget: { ...defaultMetrics }
};

export function FinancialProvider({ children }: { children: React.ReactNode }) {
  const [financials, setFinancials] = useState<FinancialData>(defaultFinancials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<keyof FinancialData>('actual');
  const [uploadedFiles, setUploadedFiles] = useState<Record<keyof FinancialData, UploadedFile | null>>({
    actual: null,
    lastPeriod: null,
    budget: null
  });
  const [aiReport, setAIReport] = useState<string | null>(null);

  const updateFinancials = (period: keyof FinancialData, updates: Partial<FinancialMetrics>) => {
    setFinancials(prev => ({
      ...prev,
      [period]: { ...prev[period], ...updates }
    }));
  };

  const resetFinancials = (period: keyof FinancialData) => {
    setFinancials(prev => ({
      ...prev,
      [period]: { ...defaultMetrics }
    }));

    setUploadedFiles(prev => ({
      ...prev,
      [period]: null
    }));

    if (period === 'actual') {
      setAIReport(null);
    }
  };

  const setUploadedFile = (period: keyof FinancialData, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [period]: file ? {
        file,
        name: file.name,
        size: file.size,
        lastModified: file.lastModified
      } : null
    }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const exportData = () => financials;
  const importData = (data: FinancialData) => setFinancials(data);

  const value = {
    financials,
    updateFinancials,
    isModalOpen,
    openModal,
    closeModal,
    selectedPeriod,
    setSelectedPeriod,
    resetFinancials,
    uploadedFiles,
    setUploadedFile,
    aiReport,
    setAIReport,
    exportData,
    importData
  };

  return (
    <FinancialContext.Provider value={value}>
      {children}
    </FinancialContext.Provider>
  );
}

export function useFinancial() {
  const context = useContext(FinancialContext);
  if (context === undefined) {
    throw new Error('useFinancial must be used within a FinancialProvider');
  }
  return context;
}